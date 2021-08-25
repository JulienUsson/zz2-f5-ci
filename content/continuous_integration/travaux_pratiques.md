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
  test:
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
      - name: Run tests
        run: npm run test
```

Ce fichier permet, à chaque commit, de lancer les tests.
Maintenant, pousser ce fichier sur git et regarder *Github* exécuter la pipeline depuis son interface web.
N'hésitez pas à cliquer sur la pipeline pour voir le terminal et les commandes lancées en temps réel par le job.

## Amélioration de la pipeline

 1. Ajouter l'exécution d'ESLint (`npm run lint`) à la suite du job *test*.

 2. Utiliser la [documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) pour lancer les jobs :
    * lors d'un push sur `master`.
    * lors d'une pull request sur une branche commençant par `feature/**` ou `bugfix/**`.

 3. Lors de l'execution des tests, un repertoire *coverage* est créer contenant un rapport de couverture des tests. Sauvegarder ce rapport dans Github en utilisant le concept d'artifacts. Aidez-vous de la [documentation](https://docs.github.com/en/actions/guides/storing-workflow-data-as-artifacts).

## Autres ressources

 * [Github Actions documentation](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions) [EN]
