---
title: "TP n°2 Javascript avancé"
---

Avant de commencer, n'oubliez pas que la documentation de Javascript est disponible [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript) ou [là](https://www.w3schools.com/js/default.asp). Nous utiliserons [CodeSandbox](https://codesandbox.io/s/vanilla), un environnement en ligne pour coder et exécuter du Javascript.

## Exercice 1 : 

Ecrire un script utilisant la bibliothèque [Chalk](https://github.com/chalk/chalk#usage) qui écrit chaque élément du tableau suivant dans la couleur de l'élément.

```javascript
const colors = ["blue", "red", "green", "yellow", "cyan"]
```

⚠️ `const chalk = require('chalk');` est l'ancienne syntaxe, il faut utiliser `import chalk from "chalk"`. 

⚠️ N'oubliez pas d'ajouter la bibliothèque `Chalk` avec le bouton `Add dependency` de CodeSandbox.

## Exercice 2 :

Ecrire un script qui récupère 100 users via [randomuser](https://randomuser.me/api/?results=100) avec [axios](https://github.com/axios/axios#example) et qui les affichent.

 * En utilisant les [promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
 * En utilisant [async](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function)/[await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

⚠️ Attention à l'aspect asynchrone du code ! Mettez des logs un peu partout et regarder l'ordre d'affichage. 

⚠️ N'oubliez pas d'ajouter la bibliothèque `Axios` avec le bouton `Add dependency` de CodeSandbox.

## Exercice 3 :

Ecrire un script qui récupère 1000 users et qui affiche les users dont la timezone est Paris. (Utiliser [filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter))

 * En utilisant les [promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
 * En utilisant [async](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function)/[await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)


## Exercice 4 :

Ecrire un script qui récupère 1000 users et qui stocke dans un second tableau uniquement le prénom et le nom de tous les users dont le timezone est Paris. (Utiliser [filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter), [map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map) et [forEach()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach))

 * En utilisant les [promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
 * En utilisant [async](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function)/[await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await)

## Exercice 5

La fonction [setTimeout()](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) permet d'exécuter du code après x ms de façon asynchrone. Malheureusement, à l'époque de la création de cette fonction, les promesses n'existaient pas ! 

Créer une fonction wrappant setTimeout() dans une promesse puis écrire un programme qui affiche le dialogue suivant :
```
- toc toc
**attendre 500 millisecondes**
- qui est la?
**attendre 10 secondes**
- C'est Internet Explorer
```

 * En utilisant [setTimeout()](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
 * En utilisant les [promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses) et votre nouvelle fonction
 * En utilisant [async](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/async_function)/[await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await) et votre nouvelle fonction

## Autres ressources

 * [Comprendre les promesses en js](https://frank.taillandier.me/2017/03/23/comprendre-les-promesses-en-javascript/) [FR]
 * [Javascript event loop explained](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/) [EN]
 * [Concurrence et boucle d'événements](https://developer.mozilla.org/fr/docs/Web/JavaScript/Concurrence_et_boucle_des_%C3%A9v%C3%A9nements) [FR]
 * [Async/await](https://blog.xebia.fr/2017/11/14/asyncawait-une-meilleure-facon-de-faire-de-lasynchronisme-en-javascript/) [FR]
