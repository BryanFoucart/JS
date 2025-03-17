// variables
let age = 30; // number
let bool = true; // boolean
let chaine = "Hello"; // string
let nothing = null; // null
let undef = undefined; // undefined
let tab = []; // array
let obj = {}; // object
console.log("age :", age, "ans.", typeof age);
// console.warn(firstName);

// opérateurs
let nombre1 = 10;
let nombre2 = 12;

let resultat = nombre1 + nombre2;
let resultat2 = nombre1 - nombre2;
let resultat3 = nombre1 * nombre2;
let resultat4 = nombre1 / nombre2;
let resultat5 = nombre1 % nombre2; // modulo si 0 alors pair sinon impair
let resultat6 = nombre1 ** nombre2; // exposant
let resultat7 = nombre1++; // incrémentation
let resultat8 = nombre1--; // décrémentation

let isPair = 0;
let isImpair = 0;

isPair = nombre1 % 2 === 0; // pair
isImpair = nombre1 % 2 !== 0; // impair

console.log("resultat :", resultat);

// comparaison

let nombreA = "9";
let nombreB = 2;

console.log(nombreA > nombreB); // true
console.log(nombreA < nombreB); // false

// comparaison de valeur
console.log(nombreA == nombreB); // true
// comparaison de valeur et de type
console.log(nombreA === nombreB); // false
console.log(nombreA !== nombreB); // true

console.log(nombreA + nombreB); // 92
console.log(Number(nombreA) + nombreB); // 11
// préférer : parseInt() ou parseFloat()

let firstName = "John";
let lastName = "Doe";
// concatenation
let text = firstName + " " + lastName;
console.log(text);

let prenom = "Joe";
let nom = "Serge";
let nomComplet =
  "Bonjour je m'appelle" + prenom + " " + nom + "et j'ai" + age + " ans.";
// Templates littérals ES6
let nomComplet2 = `Bonjour je m'appelle ${prenom} ${nom} et j'ai ${age} ans.`;

// conditions - structures de contrôle de flux
let ageA = 19;
let textAffiche = "Vous êtes";
if (ageA <= 17) {
  console.log(textAffiche + " mineur.");
} else {
  console.log(`${textAffiche} majeur.`);
}

let couleur = "orange";

if (couleur === "rouge") {
  console.log("Danger!");
} else if (couleur === "vert") {
  console.log("Succès!");
} else if (couleur === "bleu") {
  console.log("Info!");
} else if (couleur === "orange") {
  console.log("Attention!!");
} else {
  console.log("Pas d couleur");
}

switch (couleur) {
  case "rouge":
    console.log("Danger!");
    break;
  case "vert":
    console.log("Succès!");
    break;
  case "bleu":
    console.log("Info!");
    break;
  case "orange":
    console.log("Attention!!");
    break;
  default:
    console.log("Pas de couleur");
    break;
}

// boucles
let tabOfNumbers = [1, 6, 7, 9, 10]; //Array
// let tabOfNumbers2 = new Arraw(); - Autre façon de faire, Methode Object
console.log(tabOfNumbers);

for (let i = 0; i < tabOfNumbers.length; i++) {
  if (tabOfNumbers[i] > 8) {
    console.log(tabOfNumbers[i]);
  }
}

for (let i = tabOfNumbers.length - 1; i >= 0; i--) {
  console.log(tabOfNumbers[i]);
} // Inverser le traitement

for (let number of tabOfNumbers.reverse()) {
  console.log(number);
}

for (let number in tabOfNumbers) {
  console.log(number);
}

// methodes array
tabOfNumbers.map((number) => {
  console.log(number);
});

// Boucles
let i = 11;
while (i < 10) {
  console.log("vrai");
  i += 2;
}

do {
  console.log("vrai");
} while (i < 10);
