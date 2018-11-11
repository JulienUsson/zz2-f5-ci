/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°6 : Les tests !

Les tests se trouvent dans un répertoire \`__tests__\` sont exécutés via la commande \`npm run test\` (ou \`npm run isima-test\`).

Des exemples sont présents dans \`src/utils/__tests__/\` et dans \`src/__tests__/\`.

## Tests unitaire

Mettre en place des tests unitaires sur toutes les fonctions de service.

Par exemple : Import pizzas, Export pizzas, login, logout, etc...

Il faut tester chaque fonction qu'on utilise et qui pourrait poser des soucis plus tard lors de la vie du projet.

## Tests d'intégration

Mettre en place des tests d'intégration sur toutes les routes.

Par exemple : GET "/", GET "/login", etc

Le but est de tester que les pages s'affichent comme elles se doient.

## Autres ressources

 * [Supertest](https://github.com/visionmedia/supertest/) [EN]
 * [Jest API](https://jestjs.io/docs/en/expect) [EN]
 * [ESLint](https://eslint.org/) [EN]
`}</Markdown>
)
