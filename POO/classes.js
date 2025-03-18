//Model
class Person {
  // propriétés en private
  #age;
  #nom;
  #prenom;
  /**
   *
   * @param {number} age
   * @param {string} nom
   * @param {string} prenom
   */
  constructor(age, nom, prenom) {
    this.#age = age;
    this.#nom = nom;
    this.#prenom = prenom;
  }
  parler() {
    console.log(
      `Bonjour, je m'appelle ${this.#prenom} ${this.#nom} et j'ai ${this.#age}`
    );
  }
  toString() {
    return `Bonjour, je m'appelle ${this.#prenom} ${this.#nom} et j'ai ${
      this.#age
    }`;
  }
  // setters
  setAge(newAge) {
    this.#age = newAge;
  }
  //getters
  getAge() {
    return this.#age;
  }
}

let john = new Person(18, "John", "Marc");
let marie = new Person(67, "Marie", "Jeanne");
john.parler();
marie.parler();
console.log(john.getAge());
john.setAge(23);
console.log(`${john}`);
console.log(john);
