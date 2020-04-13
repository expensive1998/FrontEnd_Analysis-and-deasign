import React, {Component} from 'react';
import MainPage from './MainPage';
import {BrowserRouter as Router , Route , Switch , Link , Redirect } from 'react-router-dom';
import './App.css';
import WriteInPage from './components/WriteInBook';

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path ="/" component={MainPage} />
        <Route exact path="/writein" component={WriteInPage}/>
      </Router>
    );
  }
}

export default App;
