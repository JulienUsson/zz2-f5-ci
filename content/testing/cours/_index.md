---
title: "Les tests"
outputs: ["Reveal"]
---

# Les tests
Tester, c'est douter

---

## Les types de tests

 * Static analysis / Linting
 * Unit testing
 * Integration testing
 * End-to-End (e2e) testing

---

## Static analysis / Linting

 * Eslint => le plus utilisé en Javascript
 * Analyse du code sans l'exécuter
 * Détecte les erreurs de programmation comme :
    * Les variables non utilisées
    * Les imports manquants
    * ...
 * Intégré aux IDEs pour un feedback immédiat

---

![Eslint](./eslint.png)

---

## Unit testing

 * Test d'une portion ou unité d'une application
 * On va tester les fonctions de manière isolées
 * Ecrire des fonctions pures => plus simple à tester

---

```javascript
function add(a, b) {
    return a + b
}

describe("add", () => {
    test("should add two numbers", () => {
        expect(add(1, 1)).toEqual(2)
    })

    test("should add two negatives numbers", () => {
        expect(add(-1, -1)).toEqual(-2)
    })
})
```

---

## Integration testing

 * Test d'une fonctionnalité
 * Dans une app web => test d'une route
 * On va tester l'intéraction entre plusieurs fonctions

---

```javascript
describe("find all cars", () => {
    test("should respond with a 200", () => {
        return request(app)
            .get("/cars")
            .expect("Content-Type", "application/json")
            .expect(200)
    })
})
```

---

![Eslint](./integration-vs-unit-testing.gif)

---

## End-to-End testing

 * Test de l'interface
 * On va simuler des scénarios utilisateur
 * Les scénarios vont cliquer, saisir, scroller dans la page

---

## Et pleins d'autres encore 

 * Regression testing
 * Monkey testing
 * Canary testing
 * ...
