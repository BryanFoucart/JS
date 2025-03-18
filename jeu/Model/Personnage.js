export class Personnage {
  #nom;
  #pointsDeVies;
  #force;
  #categorie;
  constructor(nom, pointsDeVies, force, categorie) {
    this.#nom = nom;
    this.#pointsDeVies = pointsDeVies;
    this.#force = force;
    this.#categorie = categorie;
  }
  attaquer(attaquant, victime, degats) {
    attaquant.setPointsDeVies(degats * 2);
    victime.perteVie(degats);
  }
  setPointsDeVies(degats) {
    this.#pointsDeVies += degats;
  }
  perteVie(degats) {
    this.#pointsDeVies -= degats;
    this.#force -= 2;
  }
  getPointsDeVies() {
    return this.#pointsDeVies;
  }
  getForce() {
    return this.#force;
  }
}
