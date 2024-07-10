import { Person } from "../models/has-many.js";

export const renderMain = () => {
  const app = document.querySelector('#app');
  const personFormSection = document.createElement('section');
  const gameFormSection = document.createElement('section');
  const peopleListSection = document.createElement('section');
  app.append(personFormSection, gameFormSection, peopleListSection);

  personFormSection.innerHTML = `
    <form id="people-form">
    <h2>Add Person</h2>
      <label for="person-name">Person Name:</label>
      <input type="text" name="name" id="person-name" required>
      <button type="submit">Add Person</button>
    </form>
  `;

  gameFormSection.id = 'gameForm';
  gameFormSection.innerHTML = `
    <form id="game-form">
      <h2>Add Game</h2>
      <label for="people-select">Select Person:</label>
      <select id="people-select" name="id" required>
        <!-- Dynamic people Options Here -->
      </select>
      <label for="game-title">Game Title:</label>
      <input type="text" name="title" id="game-title" required>
      <button type="submit">Add Game</button>
    </form>
  `;

  peopleListSection.innerHTML = `
    <ul id='people-list'> 
      <h2>People</h2>
    </ul>
  `
};

export const renderPerson = (person) => {
  const personElement = document.createElement('li');
  document.querySelector('#people-list').append(personElement);

  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  personElement.append(h3, ul);

  personElement.id = `person-num-${person.id}`;
  h3.textContent = person.name;
  ul.id = `person-ul-${person.id}`;

  renderGames(ul, person)
  updateDropDown();
};


export const renderGames = (gamesUl, person) => {
  const games = person.getGames();
  if (games.length === 0) {
    gamesUl.innerHTML = 'No games have been added for this person.';
    return;
  }

  gamesUl.innerHTML = '';
  games.forEach((game) => {
    const li = document.createElement('li');
    li.textContent = game.title;
    gamesUl.append(li);
  });
};

export const updateDropDown = () => {
  let personSelect = document.querySelector('#people-select')

  personSelect.innerHTML = '';

  Person.getAllPeople().forEach(person => {
    const option = document.createElement('option');
    option.textContent = person.name
    option.value = person.id;
    personSelect.append(option);
  });
}
