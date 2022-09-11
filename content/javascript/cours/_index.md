---
title: "Javascript"
outputs: ["Reveal"]
weight: 1
---

# Javascript
console.log("Hello World !")

---

## Javascript en quelques mots

 * Langage interprété
 * Impératif, orienté objet, fonctionnel
 * Créé le 4 decembre 1995
 * Standardisé sous le nom d'ECMAScript
 * N'a **AUCUN** rapport avec Java !!!

---

## Pourquoi utiliser Javascript?

 * Simple à utiliser/apprendre
 * Plein de concepts sympas (fonctionnel, asynchrone)
 * Populaire (Premier sur [Stackoverflow Survey 2022](https://survey.stackoverflow.co/2022/#technology-most-popular-technologies)) 

    => Très grosse communauté (pleins de libs, tutos, etc...)
 * Parce que c'est moi qui décide

--- 

## l'ECMAScript

 * Avant ES5, une version tous les 3-5ans
 * A partir d'ES6 (ES2015), une version tous les ans
 * Tous les navigateurs modernes supportent ES5
 * mais ne supportent **pas** ES6 ([Caniuse](https://caniuse.com/es6))
 * Aujourd'hui ES2022

---

> Comment on utilise les dernières versions de Javascript ?

---

## les transpileurs

 * Le plus utilisé est [BabelJS](https://babeljs.io/)
 * Permet de transformer un langage en un autre
 * Ne pas confondre avec un compilateur
 * ES2022 => ES5, plus de soucis de compatibilité !
 * Les [polyfills](https://developer.mozilla.org/fr/docs/Glossary/Polyfill) permettent également une meilleure rétrocompatibilité

---

![transpileurs](transpileurs.png)

---

## Quelques langages

 * TypeScript (4ème ["Most loved"](https://survey.stackoverflow.co/2022/#technology-most-loved-dreaded-and-wanted)) 
 * ReasonML
 * CoffeeScript
 * et pleins d'autres...

---

> Et ça ressemble à quoi ?

---

## Les variables

```javascript
// Déclarer une variable
let var1 = "toto"
let var2 = 2
let var3 = 3.5

var1 = 5
var1 = "tutu"

// Déclarer une constante
const const1 = "titi"
// const1 = "tata" /!\ IMPOSSIBLE
```
⚠️ Le mot-clé `var` a été déprécié.

---

## Les conditions

```javascript
let i = 0

if( i === 0 ) {
  console.log("i === 0")
} else {
  console.log("i !== 0") 
}

i == "0" // true
i == 0 // true
i === "0" // false
i === 0 // true
```

---

## Les boucles

```javascript
let i = 0
while ( i < 10 ) {
    console.log(i)
    i++
}

for ( let j = 0; j < 10; j++ ) {
    console.log(j)
}
```

---

## Les fonctions

```javascript
function add ( val1, val2 ) {
    return val1 + val2
}
console.log(add(1, 2))  // 3

const add2 = function (val1, val2) {
    return val1 + val2
}
console.log(add2(1, 2)) // 3

const add3 = (val1, val2) => {
    return val1 + val2
}
console.log(add3(1, 2)) // 3

const add4 = (val1, val2) =>  val1 + val2
console.log(add4(1, 2)) // 3

const add5 = add4
console.log(add5(1, 2)) // 3
```

---

## Les tableaux

```javascript
const tableau = [1, 2, "toto", "tutu", 3.4]
console.log(tableau.length)           // 5
console.log(tableau[0])               // 1

console.log(tableau.push('titi'))     // 6
console.log(tableau)                  // [1, 2, "toto", "tutu", 3.4, "titi"]
console.log(tableau.pop())            // titi
console.log(tableau)                  // [1, 2, "toto", "tutu", 3.4]

console.log(tableau.unshift('titi'))  // 6
console.log(tableau)                  // ["titi", 1, 2, "toto", "tutu", 3.4]
console.log(tableau.shift())          // titi
console.log(tableau)                  // [1, 2, "toto", "tutu", 3.4]

console.log(tableau.indexOf("toto"))  // 2
console.log(tableau.includes("toto")) // true

console.log([0, 1, 2] === [0, 1, 2])  // false
```


---

## Les tableaux

```javascript
const users = [{name: "toto", age: 18}, {name: "titi", age: 22}, {name: "tutu", age: 16}]
users.forEach(user => console.log(user.name))
// toto titi tutu

const uppercaseUsers = users.map(user => user.name.toUpperCase())
// ["TOTO", "TITI", "TUTU"]

const majorUsers = users.filter(user => user.age >= 18)
// [{name: "toto", age: 18}, {name: "titi", age: 22}]

const toto = users.find(user => user.name === "toto")
// {name: "toto", age: 18}
```

[Et d'autres methodes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Les objets

```javascript
const dictionnaire = {tutu: "toto", titi: 1, toto: "tutu"}
console.log(dictionnaire.tutu)                  // "toto"
console.log(dictionnaire.titi)                  // 1
console.log(dictionnaire["tutu"])               // "toto"
console.log(dictionnaire["tu" + "tu"])          // "toto"

console.log(Object.keys(dictionnaire));         // ["tutu", "titi", "toto"]
console.log(Object.values(dictionnaire));       // ["toto", 1, "tutu"]

console.log({tutu: "toto"} === {tutu: "toto"})  // false
```

[Et d'autres methodes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## Les collections

```javascript
const collection = [ {toto: 3, tutu: 2}, {toto: 5, tutu: 2}, {toto: 7, tutu: 1}]

console.log(collection[0])      // {toto: 3, tutu: 2}
console.log(collection[0].toto) // 3
```

---

> Mais Javascript n'est pas fait pour être exécuté sur un navigateur ?!

---

## NodeJS

 * Créé en 2009 par Ryan Dahl
 * Interpréteur Javascript (machine virtuelle)
 * Utilise le V8 de Google créé en 2009
 * Il existe des alternatives: Bun, Deno, ...

---

## NPM

 * Node Package Manager
 * Inclus avec NodeJS
 * Permet l'installation et la gestion des bibliothèques
 * Il existe des alternatives: Yarn, PNPM, Bun, ...

---

## Comment ça marche ?

```bash
# Lancer un script
node fichier.js

# Initialiser un projet
npm init

# Installer une dépendance
npm install dependency-name

# Lancer un script
npm run script-name
```

---

## package.json

```json
{
  "name": "nom",
  "description": "description",
  "version": "0.1.0",
  "scripts": {
    "start": "echo hello world",
  },
  "dependencies": {
    "hello-world": "^0.3.2"
  },
}

```

[Semver](https://devhints.io/semver)