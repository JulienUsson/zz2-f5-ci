/* eslint-disable no-irregular-whitespace */
import React from 'react'
import Markdown from 'components/Markdown'

export default () => (
  <Markdown>{`
# TP n°6 : Les tests !

Les tests se trouvent dans les répertoires \`__tests__\`. Ils s'exécutent via la commande \`npm run test\` (ou \`npm run isima-test\`).

Des exemples de test sont présents dans \`src/utils/__tests__/\` et dans \`src/__tests__/\`.

## Tests unitaire

Mettre en place des tests unitaires sur les fonctions de service.

Par exemple : Import pizzas, Export pizzas, login, logout, etc...

## Tests d'intégration

Mettre en place des tests d'intégration.

Par exemple : GET "/", GET "/login", etc

## Autres ressources

 * [Supertest](https://github.com/visionmedia/supertest/) [EN]
 * [Jest API](https://jestjs.io/docs/en/expect) [EN]
 * [ESLint](https://eslint.org/) [EN]
`}</Markdown>
)
