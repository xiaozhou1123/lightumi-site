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

1. Make sure `.github/workflows/deploy.yml` is placed at the Git repository root.
   If this folder is inside a parent repository, copy it to the parent folder:

   ```powershell
   cd C:\Users\W11\Desktop\site\lightumi-site
   New-Item -ItemType Directory -Force ..\.github\workflows
   Copy-Item .\.github\workflows\deploy.yml ..\.github\workflows\deploy.yml -Force
   ```

2. Push this repository to GitHub.
3. Open the repository settings: `Settings` -> `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `main` or `master`, or run the `Deploy GitHub Pages` workflow manually.

GitHub Actions will build the VitePress site and publish `docs/.vitepress/dist`.
