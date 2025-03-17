function normale(nombre) {
  const result = nombre * nombre;
  console.log(result);
}

normale(2);
//fléchée
const normale1 = (nombre) => {
  const result = nombre ** 2;
  console.log(result);
};
normale1(5);
// ======
function addition(nombre1, nombre2) {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
}

addition(1, 3);
//fléchée
const addition1 = (nombre1, nombre2) => {
  const resultat = nombre1 + nombre2;
  console.log(resultat);
};
addition1(1, 4);
// =======
let numbers = [1, 5, 7, 8, 9, 25];
function total() {
  const total = numbers.reduce((numberA, numberB) => numberA + numberB);
  console.log(total);
}
total(numbers);
//fléchée
const total2 = (array) => {
  const total2 = array.reduce((numberA, numberB) => numberA + numberB);
  return total2;
};
console.log(total2(numbers));
// ========
let ageX = [8, 12, 78, 45, 18, 43, 62, 25];
function age1(tableau) {
  const total = tableau.filter((tableau) => tableau > 17);
  return total.length;
}
console.log(age1(ageX));
// =======
let notes = [4, 7, 9, 20, 15, 11, 20, 4, 6];
function moyenne(notation) {
  const total = notation.reduce((numberA, numberB) => numberA + numberB);
  const noteMoyenne = total / notation.length;
  return noteMoyenne;
}
console.log(moyenne(notes));
// =========
let names = ["toto", "tata", "titi"];

const name = (noms) => {
  noms.forEach((element) => console.log(element));
};

name(names);

// ==========
