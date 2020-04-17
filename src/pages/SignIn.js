import React, { Component } from 'react';


  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  

export default class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
         
          username: null,
          password: null,
          loged : false  ,
          formErrors: {
            username: "",
            password: ""
          }
        };
      }
    
      handleSubmit = async(e) => {
        e.preventDefault();
        
        let x = await fetch('/api/Users/token/', {
          mode: "cors",
          method: 'POST',
          body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
          }),
          headers: {
              "Content-type": "application/json;charset=UTF-8"
          }
      })
      x = await x.json()

        if (typeof (x.token) !== formValid(this.state)) 
          alert("لطفا فرم را درست پر کنید")
         else {
            localStorage.setItem('token', x.token)
            localStorage.setItem('kind', x.kind)
            this.setState({
                loged: true
            })
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "username":
            formErrors.username =
              value.length < 6 ? "حداقل باید 6 کارکتر داشته باشید " : "";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "حداقل باید 6 کارکتر داشته باشید" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };

    render() {
        const { formErrors } = this.state;
        return (
        <div className="FormCenter">
            <form  className="FormFields" onSubmit={this.handleSubmit}  noValidate>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="username">نام کاربری</label>
                <input type = "text" id="username"  className={formErrors.username.length > 0 ?"error FormField__Input" : "FormField__Input"}
                   placeholder="نام کاربری خود را وارد کنید" name="username" noValidat onChange={this.handleChange} />
                <br/>{formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
           </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">گذر واژه</label>
                <input type="password" id="password" className={formErrors.password.length > 0 ?
                 "error FormField__Input" : "FormField__Input"} 
                 placeholder="گذرواژه خود را وارد کنید" name="password"  noValidate
                onChange={this.handleChange} />
                <br/>{formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              </div>
              
              <div className="FormField">
                  <button className="FormField__Button mr-20">ورود</button> 
              </div>
            </form>          
          </div>
        );
    }
}

