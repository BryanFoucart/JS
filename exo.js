// Exo 1
let nom = "Serge";

console.log("Je s'appelle", nom);

// Exo 2
let age = 58;
age = age + 5;
age += 5; // raccourci

console.log("Serge a", age, "ans.");

// Exo 3
let prenom = "Jean";
let nom2 = "Castex";
let nomComplet = prenom + " " + nom2;
console.log(nomComplet);

// Exo 4
let nombre1 = 10;
let nombre2 = 20;

let isEqual = nombre1 === nombre2;
let isGreat = nombre1 > nombre2;

console.log(isEqual);
console.log(isGreat);

// Exo 5
let ageB = 12;
let text1 = "Vous êtes ";

if (ageB < 18) {
  console.log(text1 + "mineur.");
} else {
  console.log(text1 + "majeur.");
}

// Exo 6

let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of tableau) {
  console.log(number);
}

// let tableau1 = [];
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
