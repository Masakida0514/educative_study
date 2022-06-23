import React from 'react';

// グローバル変数
// 今回はapp内で変数を定義し、他のクラスに渡す：Props
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

const App = () => {
const stories = [
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

  const handleChange = event => {
    console.log(event.target.value);
  };


  return (
    <div>
      <h1>Masaki Mori 的な something</h1>

      <label htmlFor='search'>検索: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <hr />
      {/* List()にlistとしてstoriesをpropsしてる */}
      <List list = {stories}/>
    </div>
  );
}


const List = () => 
  list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));



export default App;
