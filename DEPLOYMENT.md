# Guide de Déploiement GitHub Pages

## Configuration Requise

Le site est configuré pour être déployé sur GitHub Pages à l'URL : `https://jab-ber.github.io/jabb-landing/`

## Option 1 : Déploiement Manuel (Recommandé)

### Étape 1 : Activer GitHub Pages

1. Allez sur **https://github.com/Jab-ber/jabb-landing/settings/pages**
2. Dans la section "Build and deployment" :
   - **Source** : Sélectionnez "GitHub Actions"
   
### Étape 2 : Ajouter le Workflow

Le workflow est déjà créé dans `.github/workflows/deploy.yml` mais ne peut pas être poussé automatiquement.

**Créez manuellement le fichier** sur GitHub :

1. Allez sur https://github.com/Jab-ber/jabb-landing
2. Créez le dossier `.github/workflows/` si nécessaire
3. Créez le fichier `deploy.yml` avec le contenu suivant :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Étape 3 : Déclencher le Déploiement

Une fois le workflow créé, il se déclenchera automatiquement à chaque push sur `main`.

Vous pouvez aussi le déclencher manuellement :
1. Allez dans l'onglet **Actions**
2. Sélectionnez "Deploy to GitHub Pages"
3. Cliquez sur "Run workflow"

## Option 2 : Déploiement depuis la Branche `gh-pages`

Si vous préférez ne pas utiliser GitHub Actions :

### Build local et push vers gh-pages

```bash
# Build le projet
pnpm run build

# Installer gh-pages si nécessaire
pnpm add -D gh-pages

# Ajouter le script dans package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Déployer
pnpm run deploy
```

Puis dans les paramètres GitHub Pages, sélectionnez la branche `gh-pages` comme source.

## Vérification

Une fois déployé, le site sera accessible à :
**https://jab-ber.github.io/jabb-landing/**

## Fichiers Importants

- `vite.config.js` : Contient `base: '/jabb-landing/'` pour les chemins corrects
- `public/.nojekyll` : Désactive Jekyll pour éviter les problèmes avec les fichiers commençant par `_`
- `.github/workflows/deploy.yml` : Workflow GitHub Actions pour déploiement automatique

## Dépannage

### Erreur 404 sur les assets

Si vous voyez des erreurs 404 :
1. Vérifiez que `base: '/jabb-landing/'` est bien dans `vite.config.js`
2. Vérifiez que le fichier `.nojekyll` existe dans `public/`
3. Rebuild le projet : `pnpm run build`

### Le workflow ne se déclenche pas

1. Vérifiez que GitHub Pages est configuré pour utiliser "GitHub Actions"
2. Vérifiez que le workflow existe dans `.github/workflows/deploy.yml`
3. Vérifiez les permissions dans Settings → Actions → General → Workflow permissions

## Support

Pour toute question, consultez la documentation officielle :
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

