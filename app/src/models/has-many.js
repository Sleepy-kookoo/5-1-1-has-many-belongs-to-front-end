import getId from "../utils/getId.js";
import Game from "./belongs-to.js";

// build the class that would have many things
export class Person {
  static #allPeople = []; // authors are added in here
  #games = []; // books are added in here

  constructor(name) {
    this.id = getId();
    this.name = name; // Array to store books
    Person.#allPeople.push(this); //pushing in any new authors into the all authors array
  };

  addGame(gameTitle) {
    this.#games.push(new Game(gameTitle, this.name)); // adds the books from here to be pushed into the array of books
  };

  getGames() {
    return [...this.#games];
  };

  static getAllPeople() {
    return [...Person.#allPeople];
  }

  static findBy(id) {
    return Person.#allPeople.find((person) => person.id === id);
  }
}
