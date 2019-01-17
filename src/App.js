import React, { Component } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList/TodoList'
import Calender from './components/Calender/Calender'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      items:[],
      currentItem: {text:'',key:''}
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar/>
        <TodoList 
          addItem={this.addItem}
        />
        <Calender/>
      </div>
    );
  }
}

export default App;
