/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°7 : CircleCi !

## Mise en place de l'intégration continue

[CircleCi](https://circleci.com/) est un logiciel d'intégration continue très populaire et gratuit pour les projets open-source.
Avec l'aide du cours et de la doc, ajouter de l'intégration continue à votre application :

 * Créer un compte sur [CircleCi](https://circleci.com/) et le lier à votre compte GitHub.
 * Ajouter CircleCi à votre projet
 * Créer le fichier \`.circleci/config.yml\` et y mettre la configuration.

Le but de ce TP est qu'à chaque commit sur une [branche](https://circleci.com/docs/2.0/configuration-reference/#branches) \`feature/**\`, les tests sont lancés et indique si la nouvelle feature peut-être intégrée.

## Exemple de configuration

\`\`\`
version: 2 # use CircleCI 2.0
jobs: # a collection of steps
  build: # runs not using Workflows must have a \`build\` job as entry point
    docker: # run the steps with Docker
      - image: circleci/node:latest # this is where all \`steps\` will run
    steps: # a collection of executable commands
      - checkout # special step to check out source code to working directory
      - run:
          name: update-npm
          command: 'sudo npm install -g npm@latest'
      - restore_cache: # special step to restore the dependency cache
          key: dependency-cache-{{ checksum "package.json" }}
      # Installer les dépendances
      - save_cache: # special step to save the dependency cache
          key: dependency-cache-{{ checksum "package.json" }}
          paths:
            - ./node_modules
      # Lancer les tests
\`\`\`

## Autres ressources

 * [CircleCi doc](https://circleci.com/docs/2.0/) [EN]
 * [CircleCi Getting started](https://circleci.com/docs/2.0/getting-started/) [EN]
 * [CircleCi doc JS](https://circleci.com/docs/2.0/language-javascript/) [EN]
`}</Markdown>
)
