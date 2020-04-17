import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, NavLink} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import exitIcon from  './Assets/Imgs/exit_icon.png'

function App() {
  return (
<Router>
      <div className="App">
        <div className = "App__Aside"></div>
        <div className = "App__Form">
          <div className ="FormTitle">
            <NavLink to = "/sign-in" activeClassName = "FormTitle__Link--Active" className = "FormTitle__Link">
              ورود
            </NavLink> 
            <p className = "FormTitle__Link">یا</p> 
            <NavLink exact to= "/" activeClassName = "FormTitle__Link--Active" className= "FormTitle__Link " > 
              ثبت نام
            </NavLink>
          </div>
          
          <a href = "#" > <img className = "Exit_Icon" src = {exitIcon} alt ="exit icon"/> </a>
          
          <Route exact path = "/" component={SignUp}></Route>
          
          <Route  path ="/sign-in" component = {SignIn}></Route>
        </div> 

    </div>
    </Router>
  );
}

export default App;
