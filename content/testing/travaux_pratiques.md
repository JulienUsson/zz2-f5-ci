---
title: "TP n°5 Les tests"
weight: 2
draft: true
---

## Ajout des tests unitaires

src/services/gameService.test.js
{{< highlight javascript >}}
import * as gameService from "./gameService"

describe("Game service", () => {
  test("should init a deck", () => {
    // TOTO
  })

  test("should draw cards", () => {
    // TODO
  })

  test("should put camels from hand to herd", () => {
    // TODO
  })
})
{{< /highlight >}}

ℹ️ La fonction `createGame` sera testé par le test d'intégration.

ℹ️ la commande `npm run test` permet d'exécuter les tests.

ℹ️  Les fichiers doivent se terminer par `.test.js` pour que [Jest](https://jestjs.io/) les retrouve automatiquement.

ℹ️  N'oubliez pas de tester les cas nominaux ainsi que les cas d'erreurs.

ℹ️  Attention de vérifier que l'analyse de code statique ([ESLint](https://eslint.org/)) ne révèle aucune erreur.

## Ajout des tests d'intégration

src/services/gameService.test.js
{{< highlight javascript >}}
import request from "supertest"
import app from "../app"
import lodash from "lodash"

// Prevent database service to write tests game to filesystem
jest.mock("fs")

// TODO: Prevent shuffle for tests

describe("Game router", () => {
  test("should create a game", async () => {
    const response = await request(app).post("/games").send({ name: "test" })
    // TODO
  })
})

{{< /highlight >}}

Maintenant que cette nouvelle fonctionnalité est testée, elle est enfin terminée 🎉.
Si vous étiez en équipe, ce serait le moment de créer la *merge-request* afin de faire valider votre code par vos coéquipiers afin de l'intégrer dans l'application.

Comme vous êtes seul, vous pouvez merger votre branche avec *git* (`git checkout master && git merge feature/create-game`) ou via une *merge-request*.

## Autres ressources

 * [Jest documentation](https://jestjs.io/docs/en/getting-started) [EN]
 * [Jest expect documentation](https://jestjs.io/docs/en/expect) [EN]
 * [Jest mock function documentation](https://jestjs.io/docs/en/mock-function-api) [EN]
