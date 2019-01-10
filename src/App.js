import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList'
import Calender from './components/Calender'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
        <Calender/>
      </div>
    );
  }
}

export default App;
