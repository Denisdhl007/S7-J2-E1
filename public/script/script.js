// # Variable 

// ## Introduction
// ### Exercice 1.1  
// - Déclare une variable du nom de "firstVariable" qui a comme valeur ton prénom entre guillemets 
// - affiche la via un console.log

let firstVariable = `Denis`;
console.log(firstVariable);

// ### Exercice 1.2 
// - Déclare une variable vide (sans valeur) et affiche la via le console.log
// - Analyse le résultat. 

let firstVariable1 = ``;
console.log(firstVariable1);

// ### Exercice 1.3
// - Sur la variable de l'exercice 1.2, réassigne une valeur.
// - Affiche la via un console.log

firstVariable1 = `Lili`;
console.log(firstVariable1);

// ### Exercice 1.4
// - déclare une variable avec comme valeur null (attention le null s'ecrit tel quel sans guillemets. sa couleur devrait changer)
// - déclare une nouvelle variable mais cette fois-ci vide
// affiche les deux variables via une console.log et analyse le résultat
// - prend le temps d'aller chercher la différence entre une variale "null" et "undefined" 

let firstVariable2 = null;
let firstVariable3 = ``;
console.log(firstVariable2);
console.log(firstVariable3);

// ## Variable suite
// ### Exercice 2 
// - Déclare  une variable de type string, integer et booléan
// - affiche les trois variables dans un console.log
// - affiche les types des trois variables par une méthode

let x = `Know`;
let xtype = typeof(x);
let y = 20;
let ytype = typeof(y);
let z = true
let ztype = typeof(z);

console.log(x);
console.log(xtype);
console.log(y);
console.log(ytype);
console.log(z);
console.log(ztype);

// ### Exercice 2.1
// - déclare 2 variables. Une qui va prendre un pays et l'autre sa capitale.
// - déclare une variable "maPhrase" qui va prendre comme valeur une phrase. 
// - Ecrit cette phrase avec la concaténation (avec le symbole +)
//     - ex : let textUne = variableCapitale + "est la capitale du pays : "+ variablePays

// test
let t = `lol`;
let v = `qot`;
let ensemble = t + v;
console.log(ensemble);

let pays = `Sweden`;
let head = `Stockholm`;
let maPhrase = `Ìl est temps d' aller`;
let concat = maPhrase  + head + pays;
console.log(concat)
// let concat1 = maPhrase + `à` + head + `, la capital de la` + pays `.`;
// console.log(concat1)

// ### Exercice 2.2
// - Déclare une variable "maPhraseNew" qui va prendre et écrit la même phrase que l'exercice 2.1 (utilise les mêmes variables)
// - Par contre, réecrit la phrase avec la nouvelle facon de faire depuis ES6 (les backticks `${}`)
// Affiche le resultat via un console.log

let maPhraseNew = `${maPhrase} à ${head} la capital de la ${pays}`;
console.log(maPhraseNew)

// ### Exercice 2.3
// - Vous avez compris, la nouvelle facon d'ecrire est plus efficace et plus lisible. Il serait plus optimale d'utiliser cette maniere de faire. 
// - Pour savoir si vous avez compris, déclarer plusieurs variables et faite une phrase longue avec cette facon d'écrire

let x1 = `boucle`;
let y2 = `constructeur`;
let z3 = `série`;
let newPhrase = `Une ${x1} est un ${y2} de code qui permet de répéter une ${z3} d'instructions`
console.log(newPhrase);

// ### Exercice 2.4
// - déclare une variable de type integer. la valeur est de 7
// - déclare une variable de type string. la valeur est de "7"

let x2 = 7;
let y3 = "7";

// - via plusieurs console.log : 
//     - fait : variable1 = variable2
//     - fait : variables1 == variable2
//     - fait : variables 1 === variable2
// prenez le temps d'analyser les résultats et tirer une conclusion 

let variable1 = 10;
let variable2 = 20;

console.log(variable1 = variable2);
console.log(variable1 == variable2);
console.log(variable1 === variable2);

// ### Exercice 2.5

// Test
var x6 = 1;
var y6 = 2; 
var result = x6 + y6;
console.log(result)

// - déclare une variable de type integer. la valeur est de 5

let x3 = 5;

// - déclare une variable de type string. la valeur est de "5"

let y5 = "5";

// - via un console.log fait : variableInteger + variableString. 

console.log(`entrée 1:` + 5 + `5`);
console.log(`entrée 2:` + 5 + 5);
console.log(`entrée 3:` + x3 + y5);

let addition = `${x3} + ${y5}`;
console.log(`entrée 4:` + addition);

// - Réassigner la valeur de la variable string ("5") par un nombre (5)

y5 = 5;

// - refait via un console.log : variableInteger + variableString

let addition1 = `${x3} + ${y5}`;
console.log(`entrée 4:` + addition1);

let result1 = x3 + y5;
console.log(result1)

// - Analyse le résultat et tire une conclusion

// ## différence entre var, let et const
// ### Exercice 3 introduction
// - déclare une variable avec le préfix "var" du nom de "prenom" et donne lui comme valeur ton prénom(string)
// - déclare une variable avec le préfix "let"du nom de "age" donne lui comme valeur ton âge(integer)
// - déclare une variable avec le préfix "const" "nom" et donne lui comme valeur ton nom(string)
// - affiche les résultats des trois dans un console.log

var prenom = `Denis`;
let age = 29
const nom = `Henin`;

console.log(prenom);
console.log(age);
console.log(nom);

// ### Exercice 3.1 
// - déclare une variable avec le préfix "var" du même nom que celui dans l'exo 3.1 (prenom) et affiche le résultat via un console.log

var prenom = `Denis`;
console.log(prenom);

// - déclare une variable avec le préfix "let" du même nom que celui dans l'exo 3.1(age) et affiche le résultat via un console.log

let age1 = 29
console.log(age1);

// - regarde la différence entre les deux. dans cette exercice tu devrais voir la 1er différence entre let et var

// var can be reused.


// ### Exercice 3.2
// - réassigne la valeur de la variable (exo 3.1) avec le préfix "const" et affiche le résultat via le console.log
// - analyse le résultat

const prenom1 = `Denis`;
console.log(prenom1);
const age2 = 29
console.log(age1);

// ### Exercice 3.3
// - fait une condition if qui prend comme instruction true. (ne prend pas en compte l'instruction, c'est pour la facilité de l'exercice)
// - dans cette condition déclare deux variables. Une en "let" et une en "var"

// - En dehors de cette condition déclare deux autres variables qui ont les mêmes noms que celles dans la condition

// - Affiche les variables en dehors de la condition via un console.log
// - Analyse le résultat et tire une conclusion. dans cette exercice tu devrai voir la 2eme différence entre let et var

let cdt1 = 10;
var cdt2 = 20;

if(cdt1 === cdt2){
    console.log(cdt1)
}else {
    console.log(cdt2)
}

function varScoping() {
    var p = 1;
  
    if (true) {
      var p = 2;
      console.log(p); // will print 2
    }
  
    console.log(p); // will print 2
  }
  
  function letScoping() {
    let d = 1;
  
    if (true) {
      let d = 2;
      console.log(d); // will print 2
    }
  
    console.log(d); // will print 1
  }


  function varAndLetScoping() {
    var r = 1;
  
    if (true) {
      let r = 2;
      console.log(r); // will print 2
    }
  
    console.log(r); // will print 1
  }