// saisie utilisateur
let regexAge = /^(?!0$)\d{1,2}$/; // seulement des digit :  0 - 9 et limité à 2 | ^ = ouverture |  (?!0$) = pas zéro | \d{1,2} = 1 ou 2 chiffres | $ = fermeture
let age = 0;
let textRegexAge = true;
do {
  //   if (!textRegexAge) {
  //     age = Number(prompt("Veuillez saisir des nombres : "));
  //   } else {
  //     age = Number(prompt("Veuillez saisir votre age : "));
  //   }
  age = Number(
    prompt(`Veuillez saisir ${!textRegexAge ? "des nombres" : "votre age"}`)
  ); // condition ? valeur si condition vrai : si faux
  textRegexAge = regexAge.test(age.toString());
} while (!textRegexAge);

// console.log("age:", typeof age, "valeur:", age);

let textArea = "Vous êtes";
if (age >= 18) {
  console.log(`${textArea} majeur.`);
} else if (age < 18 && age > 12) {
  console.log(`${textArea} mineur.`);
} else if (age === 12) {
  console.log("bug");
}

let message = document.getElementById("text");
message.textContent = `Tu as ${age} ans.`;

// let ageA = Number(prompt("Veuillez saisir votre age : "));
