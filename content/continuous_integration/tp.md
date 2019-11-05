---
title: "TP n°6 L'intégration continue"
---

Pour être certain de la qualité du code produit sur ce projet, nous allons mettre en place une intégration continue afin d'effectuer les tests lors de chaque nouveau développement.

## Mise en place

Pour commencer, nous allons créer un fichier `.gitlab-ci.yml` et l'initialiser avec le contenu suivant

```yaml
image: node:latest 

before_script:
    - npm install

stages:
    - test

test:
    stage: test
    script: 
        - npm run test
```

Ce fichier permet, à chaque commit, de lancer les tests.
Maintenant, pousser ce fichier sur git et regarder *Gitlab* exécuter la pipeline depuis son interface web.
N'hésitez pas à cliquer sur la pipeline pour voir le terminal et les commandes lancées en temps réel par le job.

## Amélioration de la pipeline

 1. Ajouter l'exécution d'ESLint (`npm run lint`) dans un nouveau job *lint* appartenant au stage *test*.

 2. Utiliser la [documentation](https://docs.gitlab.com/ee/ci/yaml/#cache) pour mettre en cache le répertoire `node_modules` afin d'accélérer la pipeline.

 3. Utiliser la [documentation](https://docs.gitlab.com/ee/ci/yaml/#onlyexcept-basic) pour lancer les tests uniquement sur les branches commençant par `feature/`, `bugfix/` et `master`.

 4. Utiliser la [documentation](https://docs.gitlab.com/ee/ci/merge_request_pipelines/) pour empêcher une merge-request d'être mergé si la pipeline échoue.

## Autres ressources

 * [Gitlab CI documentation](https://docs.gitlab.com/ee/ci/) [EN]
