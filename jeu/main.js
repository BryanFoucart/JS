import { Personnage } from "./Model/Personnage.js";
import { Game } from "./Model/Game.js";

let myGame = new Game("Mon jeu");

let personnage1 = new Personnage("Goldorak", 15, 5, "Guerrier");
myGame.addPersonnage(personnage1);
console.log(myGame);
let personnage2 = new Personnage("Samy", 15, 5, "Archer");
myGame.addPersonnage(personnage2);
console.log(myGame);

let tabPlayers = myGame.getPersonnages();
let lose = false;
do {
  for (let i = 0; i < tabPlayers.length; i++) {
    let numberAttaquant = Number(prompt("Saisir le numéro de l'attaquant :"));
    let numberVictime = parseInt(prompt("Saisir le numéro de la victime :"));
    tabPlayers[numberAttaquant].attaquer(
      tabPlayers[numberAttaquant],
      tabPlayers[numberVictime],
      10
    );
    lose =
      tabPlayers[numberAttaquant].getPointsDeVies() <= 0 ||
      tabPlayers[numberVictime].getPointsDeVies() <= 0;
    console.log(tabPlayers[numberAttaquant]);
    console.log(tabPlayers[numberVictime]);
  }
} while (!lose);

// console.log("PDV: ", personnage2.getPointsDeVies());
// console.log("Force: ", personnage2.getForce());

// personnage1.attaquer(personnage1, personnage2, 5);

// myGame
//   .getPersonnages()
//   .forEach((player) =>
//     console.log(`Force : ${player.getNom()} - ${player.getForce()}`)
//   );

myGame.getPersonnages().forEach((player) => console.log(`${player}`));

// console.log("PDV: ", personnage2.getPointsDeVies());
// console.log("Force: ", personnage2.getForce());
