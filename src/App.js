import React, {Component} from 'react';
import MainPage from './MainPage';
import './App.css';
import './MainPage.js';
import './MainNav.js'

class App extends Component{
  render(){
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
