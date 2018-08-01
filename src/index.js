import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/search_bar.js'

//install package 'youtube API seach'
//npm install --save youtube-api-search
const API_KEY = 'AIzaSyDUP8UZWhjhwHJXzLPEZEXFDkdMxIIXrBo'

// Create new component, It will produce html
const App = () => {
  return (
    <div>
        <SearchBar />
    </div>
  );
}

//place this component's generated html and out it in the DOM
ReactDOM.render(<App />, document.getElementById('app'));
