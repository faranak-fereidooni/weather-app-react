import React, { Component } from 'react';
import SearchForm from './components/searchForm';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <h1 className="text-light m-5">Weather App</h1>
      <SearchForm/>
      </div>
    );
  }
}
 
export default App;
