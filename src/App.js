import React from 'react';

// var/const/letの違い
// var: 再宣言、再代入可能
// let: 再宣言不可、再代入可能
// const: 再宣言・再代入不可
// HtmlFor: for attribute in HTML
const title = "React";
const welcome = {
  greeting: 'Hey',
  title: 'React',
};
const element = <h1>Hello, welcome! {welcome.title}</h1>;

function getTitle(title) {
  return title;
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
];

function App() {
  return(
    <div>
      <h1>Hello {title} {welcome.greeting} {welcome.title}</h1>
      <h2>{getTitle('React')}</h2>
      <h3>{element}</h3>
      <label htmlFor='search'>Search: </label>
      <input id='search' type="text" />
    </div>    
  );
}

export default App;
