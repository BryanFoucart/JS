let myButton = document.createElement("button");
let divRoot = document.getElementById("root");
console.log(divRoot);
let divRoot2 = document.querySelector("#root");
console.log(divRoot2);
// setTimeout(() => {
//   let divRoot2 = document.querySelector("#root");
//   console.log(divRoot2);
// }, 1000);
// // Permet de mettre du délai afin de laisser la page se charge

console.log(myButton);

let liLink = document.getElementsByClassName("link"); // => HTMLCollection - Plusieurs éléments
let liLink4 = document.getElementById("link"); // => Element
let liLink2 = document.querySelector(".link"); // => Le premier élément uniquement
let liLink5 = document.querySelector("#link"); // => Le premier élément uniquement
let liLink3 = document.querySelectorAll(".link"); // => NodeList - Plusieurs éléments

let liLink6 = document.getElementsByClassName("linked"); // Attention, tableau même vide/inexistant | HTMLCollection
let liLink7 = document.querySelector(".linked"); // Element

let liLink8 = document.querySelector(".link:nth-Child(3)"); // Permet de sélectionner un élement précis dans une classe

console.log(liLink);
console.log(liLink2);
console.log(liLink3);
console.log(liLink4);
console.log(liLink5);
console.log(liLink6);
console.log(liLink7);
console.log(liLink8);
