# LightUMI Site

This folder contains the VitePress static site for LightUMI.

## Folder structure

```text
.
|-- .github/workflows/deploy.yml  # GitHub Pages deployment workflow
|-- docs/                         # VitePress source files
|   |-- .vitepress/               # VitePress config and theme
|   |-- guide/                    # Documentation pages
|   |-- public/                   # Static assets copied to build output
|   `-- index.md                  # Home page
|-- scripts/                      # Build helper scripts
|-- package.json
`-- package-lock.json
```

## Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

The static output is generated at:

```text
docs/.vitepress/dist
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings: `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or `master`, or run the `Deploy GitHub Pages` workflow manually.

GitHub Actions will build the VitePress site and publish `docs/.vitepress/dist`.
