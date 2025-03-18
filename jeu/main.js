import { Personnage } from "./Model/Personnage.js";

let personnage1 = new Personnage("Goldorak", 15, 5, "Guerrier");
let personnage2 = new Personnage("Samy", 15, 5, "Archer");

console.log("PDV: ", personnage2.getPointsDeVies());
console.log("Force: ", personnage2.getForce());

personnage1.attaquer(personnage1, personnage2, 5);

console.log("PDV: ", personnage2.getPointsDeVies());
console.log("Force: ", personnage2.getForce());
