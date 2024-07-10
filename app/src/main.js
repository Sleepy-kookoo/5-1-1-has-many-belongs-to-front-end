import './style.css'
import { renderMain, renderGames, renderPerson, updateDropDown } from './utils/render-functions.js';
import { Person } from './models/has-many.js';

const handlePersonSubmit = (e) => {
  e.preventDefault();
  const { name } = Object.fromEntries(new FormData(e.target));
  const person = new Person(name);

  renderPerson(person);
  updateDropDown();

  e.target.reset();
}

const handleGameSubmit = (e) => {
  e.preventDefault();
  const { id, title } = Object.fromEntries(new FormData(e.target));

  const person = Person.findBy(Number(id));
  person.addGame(title);

  renderGames(document.querySelector(`#person-ul-${id}`), person);

  e.target.reset();
}

const main = () => {
  renderMain();

  document.getElementById('people-form').addEventListener('submit', handlePersonSubmit);
  document.getElementById('game-form').addEventListener('submit', handleGameSubmit);
}

main();