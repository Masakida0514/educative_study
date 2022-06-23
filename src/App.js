import * as React from 'react';

function getTitle(title) {
  return title;
}

// Add Class
class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />
      <List />
    </div>
  );
}

function List() {

  const robin = new Developer('Robin', 'Masaki');
  const denis = new Developer('Dennis', 'Masatoshi');
    
  return (
    <div>
      {robin.getName()};
      {denis.getName()};
    </div>
  );

}


export default App;
