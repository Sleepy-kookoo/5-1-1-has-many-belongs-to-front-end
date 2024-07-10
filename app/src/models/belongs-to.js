import getId from "../utils/getId.js";

// build the class that would belong to the things that has many things
class Game {
  constructor(title, creator,) {
    this.id = getId();
    this.title = title;
    this.creator = creator;
  }
}

export default Game;
