import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReacrDOM(from react-dom)
// Html to JSX
// 2 aruguments: 1st render JSX, simple app component without any component instatntiation
// the 2nd : where the React App enters your HTML
ReactDOM.render(
  <h1>Hello React World</h1>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
