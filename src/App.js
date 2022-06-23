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

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// We'll split some of responsibilities into a Standalone List Component
// React Components = App + List

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />
    </div>
  );
}


// 大きなreact appはHierarchies componentを持つ
// これをcomponent treesと言う
// App：root　Component
// List：leaf component / sibling components
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
