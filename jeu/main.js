import { Personnage } from "./Model/Personnage.js";
import { Game } from "./Model/Game.js";

let myGame = new Game("Mon jeu");
myGame.play();

// let personnage1 = new Personnage("Goldorak", 15, 5, "Guerrier");
// myGame.addPersonnage(personnage1);
// console.log(myGame);
// let personnage2 = new Personnage("Samy", 15, 5, "Archer");
// myGame.addPersonnage(personnage2);
// console.log(myGame);
// let personnage3 = new Personnage("Vlad", 125, 5, "Magicien");
// myGame.addPersonnage(personnage3);
// console.log(myGame);

// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }

let tabPlayers = myGame.getPersonnages();
let lose = false;
do {
  for (let i = 0; i < tabPlayers.length; i++) {
    const { numberAttaquant, numberVictime } = myGame.getPlayers();
    // myGame.getPlayers();
    tabPlayers[numberAttaquant].attaquer(
      tabPlayers[numberAttaquant],
      tabPlayers[numberVictime],
      10
    );

    console.log(tabPlayers);
    tabPlayers = myGame.updatePlayers(
      tabPlayers[numberAttaquant],
      tabPlayers[numberVictime]
    );

    // lose =
    //   tabPlayers[numberAttaquant].getPointsDeVies() <= 0 ||
    //   tabPlayers[numberVictime].getPointsDeVies() <= 0;

    lose = tabPlayers.some((player) => player.getPointsDeVies() <= 0); // true ou false
    if (lose) {
      alert(`${tabPlayers[numberVictime].getNom()} a perdu`);
      break;
    }
    console.log(tabPlayers);
  }
} while (!lose);
// alert("Perdu");

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
