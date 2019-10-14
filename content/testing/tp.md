---
title: "TP n°5 Les tests"
---

Maintenant que vous connaissez les bonnes pratiques en matière de tests [[14]](http://cours.usson.me/testing/cours/#/13). Le code développé dans le TP4 n'est peut-être pas le plus simple à tester.

## Remaniement du code du tp4

Réecrivez `cardService.js` afin de correspondre au fichier ci-dessous.

{{< highlight javascript >}}
export async function readFile(path) {
  // Permet la lecture d'un fichier via des promesses
}

export function csvToJson(file) {
  // transforme un csv en json en utilisant l'en-tête du fichier pour définir les attributs.
}

export async function importBuildings() {
  const buildingsFile = await readFile(__dirname + "/../ressources/buildings.csv")
  return csvToJson(buildingsFile)
}

export async function importWorkers() {
  // ...
}

{{< /highlight >}}

## Ajout des tests unitaires

Commençons l'écriture des tests avec des tests unitaires. Dans un premier temps, il faut créer un fichier `src/services/cardService.test.js`.

{{< highlight javascript >}}
import * as cardService from "./cardService"

describe("csvToJson", () => {
  test("transform a csv to a javascript object", async () => {
    // ...
  })
  // ...
})
// ...
{{< /highlight >}}

⚠️ Les fichiers doivent se terminant par `.test.js` pour que [Jest](https://jestjs.io/) les retrouve automatiquement.

ℹ️ l'accent grave `` ` `` permet d'écrire des chaînes de caractères sur plusieurs lignes (Pratique pour écrire un faux csv).

ℹ️ la commande `npm run test` permet d'éxécuter les tests.

La lecture d'un fichier étant un effet de bord, il est conseillé de *mocker* cette partie.
L'exemple ci-dessous, montre comment *mocker* la méthode readFile pour qu'elle nous retourne la chaîne de caractère `"foo"`.

{{< highlight javascript >}}
import fs from "fs"
jest.mock("fs")

fs.readFile.mockImplementation((_path, _opt, callback) => callback(null, "foo"))
{{< /highlight >}}

⚠️ N'oubliez pas de tester les cas nominaux ainsi que les cas d'erreurs.

## Ajout des tests d'intégration

Il ne reste plus qu'à ajouter des tests d'intégrations afin de vérifiers que nos deux routes fonctionnent.
Inspirez-vous de `src/routes/healthRouter.test.js` pour les écrires. 

{{< highlight javascript >}}
import request from "supertest"
import app from "../app"

describe("Test the health check", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/health")
    expect(response.statusCode).toBe(200)
    expect(response.body).toStrictEqual({ health: "ok" })
  })
})
{{< /highlight >}}

⚠️ Attention de vérifier que l'analyse de code statique (*ESLint*) ne révèle aucune erreur.

Maintenant que cette nouvelle fonctionnalité est testée, elle est enfin terminée 🎉
Si vous êtiez en équipe, ce serait le moment de créer la *merge-request* afin de faire valider votre code par vos coéquipiers afin de l'intégrer dans l'application.

Comme vous êtes seul, vous pouvez merger votre branche avec *git* (`git checkout master && git merge feature/cards-list`) ou via une *merge-request*.

## Autres ressources

 * [Jest documentation](https://jestjs.io/docs/en/getting-started) [EN]
 * [Jest expect documentation](https://jestjs.io/docs/en/expect) [EN]
 * [Jest mock function documentation](https://jestjs.io/docs/en/mock-function-api) [EN]
