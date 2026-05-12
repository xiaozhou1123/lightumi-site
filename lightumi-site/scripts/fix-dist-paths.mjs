import { readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'docs', '.vitepress', 'dist')

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await listHtmlFiles(path))
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path)
    }
  }

  return files
}

function pageDepth(file) {
  const dir = dirname(relative(dist, file))
  return dir === '.' ? 0 : dir.split(sep).length
}

function prefixFor(file) {
  const depth = pageDepth(file)
  return depth === 0 ? './' : '../'.repeat(depth)
}

function fixRootAssets(html, prefix) {
  return html
    .replaceAll('href="./assets/', `href="${prefix}assets/`)
    .replaceAll('src="./assets/', `src="${prefix}assets/`)
    .replaceAll('href="./vp-icons.css"', `href="${prefix}vp-icons.css"`)
    .replaceAll('src="./logo.svg"', `src="${prefix}logo.svg"`)
}

function fixGuideLinks(html, file, prefix) {
  if (pageDepth(file) === 0) {
    return html
  }

  return html
    .replaceAll('href="./"', `href="${prefix}index.html"`)
    .replaceAll('href="./guide/getting-started.html"', 'href="getting-started.html"')
    .replaceAll('href="./guide/data-alignment.html"', 'href="data-alignment.html"')
    .replaceAll('href="./guide/training-arrays.html"', 'href="training-arrays.html"')
    .replaceAll('href="./guide/sensors.html"', 'href="sensors.html"')
}

const files = await listHtmlFiles(dist)

for (const file of files) {
  const prefix = prefixFor(file)
  const html = await readFile(file, 'utf8')
  const fixed = fixGuideLinks(fixRootAssets(html, prefix), file, prefix)

  if (fixed !== html) {
    await writeFile(file, fixed, 'utf8')
  }
}
