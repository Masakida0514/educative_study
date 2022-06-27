import React from 'react';

// React Props : コンポーネントツリーに情報を渡す際に使う
// React State : アプリケーションをインタラクティブにする際に使う

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

  // 便利な関数、useStateを使う
  // これはReactからmanaging stateを取得する
  // useStateは別名 hook を呼ばれる
  const [searchTerm, setSearchTerm] = React.useState('');
  // 1st termはcurrent stateを表す
  // 2nd termは、このcurrent stateをupdateするstate

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
      <h1>Masaki Mori 的な something</h1>

      <label htmlFor='search'>検索: </label>
      <input id="search" type="text" onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>

      <hr />
      <List list = {stories}/>
    </div>
  );
}


const List = props => 
  props.list.map(item => (
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
