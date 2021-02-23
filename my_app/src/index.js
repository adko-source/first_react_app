import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { getRandomIndex } from './helpers';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function addTwo(a, b) {
  return a + b;
}

function addThree(a, b, c) {
  return `${a} ${b} ${c}`
}

// You can use bind to create a copy of a function
// with preset arguments
var bound = addThree.bind(null, "This", "totally");
console.log(bound("works"));

let arr = [1, 2, 3, 4];
let arr2 = [...arr, 5];
console.log(arr);
console.log(arr2);

let arr3 = [{ id: 1, colour: "red" }, { id: 2, colour: "blue" }];
arr3.map(i => console.log(i.id));

function test() {
  return "Hell"
}

console.log('Below')
console.log(test() === "Hello")

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
