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
          formErrors: {
            username: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--       
            UserName: ${this.state.username}
            Password: ${this.state.password}
          `);
        } else {
         alert("لطفا فرم را درست پر کنید")
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

