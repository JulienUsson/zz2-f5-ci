---
title: "Correction TP n°1 Javascript"
weight: 3
draft: true
---

## Exercice 1 :

En utilisant while
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
let i = 0;
while (i < numbers.length) {
  numbers[i] = numbers[i] + 42;
  i++;
}
console.log(numbers);
{{< /highlight >}}

En utilisant for
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 42;
}
console.log(numbers);
{{< /highlight >}}

En utilisant for of
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
let newTab = [];
for (let number of numbers) {
  newTab.push(number + 42);
}
console.log(newTab);
{{< /highlight >}}

En utilisant map()
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
const newTab = numbers.map(number => number + 42);
console.log(newTab);
{{< /highlight >}}

## Exercice 2 : 

En utilisant for of
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);
{{< /highlight >}}

En utilisant reduce()
{{< highlight javascript >}}
const numbers = [20, 30, 42, 66, 99];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);
{{< /highlight >}}

## Exercice 3 : 

{{< highlight javascript >}}
const colors = ["blue", "red", "green", "yellow", "cyan"];
colors.forEach(color => console.log(color));
{{< /highlight >}}

## Exercice 4 : 

{{< highlight javascript >}}
const users = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
const julien = users.find(({ name, age }) => name === "Julien" && age === 25);
console.log(julien);
{{< /highlight >}}

## Exercice 5 : 

{{< highlight javascript >}}
const users = [{name: "Julien", age: 25}, {name: "Maud", age: 24}, {name: "Bastien", age: 22}, {name: "Raphaël", age: 28}, {name: "Alexandre", age: 42}, {name: "Julien", age: 55}]
const underTwentySix = users.filter(({age}) => age < 26)
console.log(underTwentySix)
{{< /highlight >}}
