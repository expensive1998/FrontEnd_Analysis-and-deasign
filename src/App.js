import React, {Component} from 'react';
import MainPage from './MainPage';
import {BrowserRouter as Router , Route , Switch , Link , Redirect } from 'react-router-dom';
import Writeinbook from './WriteInBook/Writeinbook'

class App extends Component{
  render(){
    return (
      <Router>
        <Route exact path ="/" component={MainPage} />
        <Route exact path ="/writein" component = {Writeinbook} />
      </Router>
    );
  }
}

export default App;

//
//<Route exact path="/WriteInBook" component={WiNavbar}/>