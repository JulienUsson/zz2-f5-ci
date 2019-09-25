---
title: "TP n°1 Javascript"
weight: 1
---

Avant de commencer, n'oubliez pas que la documentation de Javascript est disponible [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript) ou [là](https://www.w3schools.com/js/default.asp). Nous utiliserons [CodeSandbox](https://codesandbox.io/s/vanilla), un environnement en ligne pour coder et exécuter du Javascript.

## Exercice 1 :

Ecrire un script qui additionne 42 à chaque élément du tableau.

```javascript
const numbers = [20, 30, 42, 66, 99]
// Résultat attendu : [62, 72, 84, 108, 141]
```

 * En utilisant [while](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/while)
 * En utilisant [for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)
 * En utilisant [for of](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
 * En utilisant [map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map)

## Exercice 2 : 

Ecrire un script qui calcule la somme d'un tableau.

```javascript
const numbers = [20, 30, 42, 66, 99]
// Résultat attendu : 257
```

 * En utilisant [for of](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
 * En utilisant [reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce)

## Exercice 3 : 

Ecrire un script qui affiche dans la console, toutes les valeurs du tableau.

```javascript
const colors = ["blue", "red", "green", "yellow", "cyan"]
// Résultat attendu : blue red green yellow cyan
```

 * En utilisant [forEach()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)

## Exercice 4 : 

Ecrire un script qui récupère l'objet `{name: "Julien", age: 25}` du tableau.

```javascript
const peoples = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
// Résultat attendu : {name: "Julien", age: 25}
```

 * En utilisant [find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)

## Exercice 5 : 

Ecrire un script qui récupère les personnes ayant moins de 26ans du tableau.

```javascript
const peoples = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
// Résultat attendu : [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}]
```

 * En utilisant [filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)
