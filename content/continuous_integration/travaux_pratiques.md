---
title: "TP n°6 L'intégration continue"
weight: 2
---

Pour être certain de la qualité du code produit sur ce projet, nous allons mettre en place une intégration continue afin d'effectuer les tests lors de chaque nouveau développement.

## Mise en place

Pour commencer, nous allons créer un fichier `.github/workflows/continuous-integration.yml` et l'initialiser avec l'exemple du cours.

```yaml
name: Continuous integration
on: [push]
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14.x'
      - name: Install dependencies
        run: npm install
  test: 
    needs: setup
    runs-on: ubuntu-latest
    steps: 
      - name: Run tests
        run: npm run test
```

Ce fichier permet, à chaque commit, de lancer les tests.
Maintenant, pousser ce fichier sur git et regarder *Github* exécuter la pipeline depuis son interface web.
N'hésitez pas à cliquer sur la pipeline pour voir le terminal et les commandes lancées en temps réel par le job.

## Amélioration de la pipeline

 1. Ajouter l'exécution d'ESLint (`npm run lint`) dans un nouveau job *lint*.

 2. Utiliser la [documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) pour lancer les jobs :
    * lors d'un push sur `master`.
    * lors d'une pull request sur une branche commençant par `feature/**` ou `bugfix/**`.

## Autres ressources

 * [Github Actions documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions) [EN]
