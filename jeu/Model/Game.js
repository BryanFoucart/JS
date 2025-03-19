import { Personnage } from "./Personnage.js";

export class Game {
  #nom = "";
  #personnages = [];
  constructor(nom) {
    this.#nom = nom;
  }

  play() {
    let numberOfPlayer = parseInt(
      prompt("Combien de joueurs dans la partie ?")
    );
    for (let i = 0; i < numberOfPlayer; i++) {
      let nom = prompt("Nom du personnage :");
      let pv = Number(prompt("Points de vie :"));
      let force = Number(prompt("Force : "));
      let classe = prompt("Classe :");
      let newPlayer = new Personnage(nom, pv, force, classe);
      this.#personnages.push(newPlayer);
    }
  }

  getPlayers() {
    let txt = "";
    for (let i = 0; i < this.#personnages.length; i++) {
      txt += `${i + 1} : ${this.#personnages[i].getNom()}\n`;
    }
    const maxIndex = this.#personnages.length;
    let numberAttaquant =
      Number(prompt(`Saisir le numéro de l'attaquant :\n${txt}`)) - 1;

    const regexindexOfVicAtt = new RegExp(`^[0-${maxIndex - 1}]$`);
    while (!regexindexOfVicAtt.test(numberAttaquant)) {
      numberAttaquant = parseInt(
        prompt(
          `Saisir un chiffre entre 1 et ${maxIndex} dans la liste :\n${txt}`
        ) - 1
      );
    }
    let numberVictime =
      parseInt(prompt(`Saisir le numéro de la victime :\n${txt}`)) - 1;
    while (!regexindexOfVicAtt.test(numberVictime)) {
      numberVictime = parseInt(
        prompt(
          `Saisir un chiffre entre 1 et ${maxIndex} dans la liste :\n${txt}`
        ) - 1
      );
    }

    let promptPlayers = { numberAttaquant, numberVictime };
    return promptPlayers;
  }
  updatePlayers(attaquant, victime) {
    for (let player of this.#personnages) {
      if (attaquant.getNom() === player.getNom()) {
        player = attaquant;
      }
      if (victime.getNom() === player.getNom()) {
        player = victime;
      }
    }
    return this.#personnages;
  }

  addPersonnage(newPersonnage) {
    this.#personnages.push(newPersonnage);
  }

  getPersonnages() {
    // pour accéder à personnages qui est en privé
    return this.#personnages;
  }
}
