// Fonctions
let nombreX = 12;
let nombreY = 10;

let result1 = nombreX + nombreY;
// console.log(result1);

let nombreX1 = 34;
let nombreY1 = 78;

let result2 = nombreX1 + nombreY1;
// console.log(result2);

let nombreX2 = 34;
let nombreY2 = 78;

let result3 = nombreX2 + nombreY2;
// console.log(result3);

// function nom () {Déclaration de la fonction}
// le mot clé 'function', un nom, éventuellement un ou plusieurs argumens et un retur
function addition(nombre1, nombre2) {
  let result = nombre1 + nombre2;
  return result;
}
// ====

// appel de la fonction addition
console.log(addition(5, 7));
// ====

function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHello2(firstName, lastName) {
  let say = `Bonjour ${firstName} ${lastName}`;
  console.log(say);
}
sayHello2("Alex", "Doe");

// fonction anonyme
const direFirst = function () {
  console.log("first");
};
direFirst();
// ====

// ES15 : fonctions fléchées

const sayHello3 = (firstName, lastName) => {
  let say = `Bonjour ${firstName} ${lastName}`;
  console.log(say);
};
sayHello3("Alexis", "Doe");

const addition2 = (toto, nombre2) => {
  let result = toto + nombre2;
  return result;
};
console.log(addition2(5, 8));
// console.log(`Bonjour, j'ai ${addition2(nombreX, nombreY)} ans`);

let addition3 = (a, b) => a + b; // accolades facultatives si un seul paramètre
console.log(addition3(5, 8));

let numbers = [4, 8, 9, 16, 17];
numbers.push(67); // ajoute 67 dans le tableau
numbers.pop(); // retire le dernier chiffre
const newNumbers = numbers.filter((number) => number > 5);
const newNumbers2 = numbers.map((number) => number * 2);

// a: valeur de départ, b: accumulateur
const newNumbers3 = numbers.reduce((a, b) => a + b);

const firstNumber = numbers.shift(); // montre le premier chiffre

numbers.forEach((number) => console.log(number)); //montre chaque valeur du tableau

console.log(numbers.includes(16)); // dis s'il contient la valeur

console.log(numbers.join("|"));
console.log(firstNumber);
console.log(newNumbers2);
console.log(newNumbers);
console.log(newNumbers3);
console.log(numbers.slice(0, 3));

// portée des variables
var age = 10; // var est déconseillé dans la mesure du possible, préférer let
// var = portée globale
if (age > 5) {
  var age = 12;
}

let nombre = 10;
const nombreS = 10; // il n'est pas possible de réasigner de valeur dans const - on ne peut pas la changer /!\

nombre = 15;
// nombreS = 15;

console.log(nombre);
console.log(nombreS);

console.log(age);

// variable qui est prévue pour stocker une valeur qui sera modifiée => let
// autre chose => const

// valeurs par défaut
/**
 *
 * le taux de TVA est facultatif => 20% par défaut
 *
 * @param {number} prixUnitaire
 * @param {number} nombreArticle
 * @param {number} tauxTVA
 * @returns
 *
 * @author Bryan Foucart <bryan.foucart97@gmail.com>
 * @link https://github.com
 */
const calculTTC = (prixUnitaire, nombreArticle, tauxTVA = 20) => {
  const prixTTC =
    nombreArticle * (prixUnitaire + (prixUnitaire * tauxTVA) / 100);
  return prixTTC;
};
const prix = calculTTC(5, 20, 5);
console.log(prix);

// fonction de rappel - callback
function salutation(nom) {
  alert("Bonjour " + nom);
}

function processUserInput(callback) {
  var nom = prompt("Entrez votre nom.");
  callback(nom); // fonction appelé à la fin du traitement
}

processUserInput(salutation);
