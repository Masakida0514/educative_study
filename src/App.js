import React from 'react';

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


// onChangeはブラウザのinputの変化をリアルタイムでlogに流す
// 流れたログの値を取得して、アプリに活かす
// onChangeは”ハンドラーと呼ばれる”
// ハンドラーはreturnに関数を渡さない限り、関数で定義する
const App = () => {
  const handleChange = event => {
    console.log(event.target.value);
  };


  return (
    <div>
      <h1>Masaki Mori 的な something</h1>

      <label htmlFor='search'>検索: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <hr />

      <List />
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
