export class Game {
  #nom = "";
  #personnages = [];
  constructor(nom) {
    this.#nom = nom;
  }

  addPersonnage(newPersonnage) {
    this.#personnages.push(newPersonnage);
  }

  getPersonnages() {
    // pour accéder à personnages qui est en privé
    return this.#personnages;
  }
}
