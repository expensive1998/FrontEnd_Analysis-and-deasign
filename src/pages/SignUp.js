import React, { Component } from 'react'
//import exitIcon from  '../Assets/Imgs/exit_icon.png'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const numberRegex = RegExp(/^\d+$/);

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
export default class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
      confirmpassword: null ,
      postalcode: null,
      phonenumber: null,
      address: null ,
      formErrors: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        postalcode: "" ,
      phonenumber: "",
      address: "" ,
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    
    fetch('/api/Users/sign-up/', {
      mode: "cors",
      method: 'POST',
      body: JSON.stringify({
        firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmpassword:  this.state.confirmpassword,
      postalcode: this.state.postalcode,
      phonenumber: this.state.phonenumber,
      address:  this.state.address
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => {
    return response.json()
}).then(json => {
    console.log(json)
});
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "لطفا حداقل 3 حرف وارد کنید" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "لطفا حداقل 3 حرف وارد کنید" : "";
        break;
      case "username":
        formErrors.username =  
        value.length < 6 ? "حداقل باید 6 کارکتر داشته باشید " : "";
          break;
      case "address":
          formErrors.address =  
          value.length < 10 ? "لطفا آدرس وارد شده صحیح و حداقل شامل 10 حرف باشد" : ""; 
          break;    
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "لطفا ایمیل را صحیح و کامل وارد کنید";
        break;
        case "phonenumber":
          formErrors.phonenumber = numberRegex.test(value) && value.length === 11 
            ? ""
            : "لطفا شماره همراه خود را صحیح و کامل وارد کنید";
          break;  
          case "postalcode":
            formErrors.postalcode = numberRegex.test(value) && value.length === 10
              ? ""
              : "کد پستی باید 10 رقمی و فقط شامل عدد باشد";
            break;          
      case "password":
        formErrors.password =
        value.length < 8 ? "گذرواژه حداقل باید 8 کارکتر داشته باشید" : "";
        break;
        break;          
        case "confirmpassword":
          formErrors.confirmpassword = value !== this.state.password
         ? "گذرواژه مطابقت ندارد" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
    render() {
      const { formErrors } = this.state;



        return (
          <>
      
          <div className="FormCenter">
            <form  className="FormFields" onSubmit={this.handleSubmit} noValidate>
              <div className="FormField">
                <label className="FormField__Label"  htmlFor="firstname">نام</label>
                <input type="text" id="firstname" className={formErrors.firstName.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="نام خود را وارد کنید" name="firstName" noValidate
                onChange={this.handleChange} />
                 <br/>{formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="lastname"> نام خانوادگی</label>
                <input type="text" id="lastname" className={formErrors.lastName.length > 0 ? "error FormField__Input" : "FormField__Input"}placeholder="نام خانوادگی خود را وارد کنید" name="lastName" noValidate
                onChange={this.handleChange} />
                 <br/> {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username">نام کاربری</label>
                <input type = "text" id="username"  className={formErrors.username.length > 0 ? "error FormField__Input" : "FormField__Input"}   placeholder="نام کاربری خود را وارد کنید" name="username" noValidate
                onChange={this.handleChange} />
                <br/> {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
           </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">گذرواژه</label>
                <input type="password" id="password" className={formErrors.password.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="گذرواژه خود را وارد کنید" name="password" noValidate
                onChange={this.handleChange} />
                <br/> {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="confirmpassword">تایید گذرواژه</label>
                <input type="password" id="confirmpassword" className={formErrors.confirmpassword.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="گذرواژه خود را تکرار کنید" name="confirmpassword" noValidate
                onChange={this.handleChange} />
                <br/> {formErrors.confirmpassword.length > 0 && (
                <span className="errorMessage">{formErrors.confirmpassword}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">پست الکترونیک</label>
                <input type="email" id="email" className={formErrors.email.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="پست الکترونیک خود را وارد کنید" name="email" noValidate
                onChange={this.handleChange} />
                <br/>{formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phonenumber">شماره تماس</label>
                <input type="text" id="phonenumber" className={formErrors.phonenumber.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="شماره همراه خود را با الگو 0912xxxxxxx وارد کنید" name="phonenumber" noValidate
                onChange={this.handleChange} />
                <br/>{formErrors.phonenumber.length > 0 && (
                <span className="errorMessage">{formErrors.phonenumber}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="postalcode">کد پستی</label>
                <input type="text" id="postalcode" className={formErrors.postalcode.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder="کد پستی خود را وارد کنید" name="postalcode" noValidate
                onChange={this.handleChange} />
                <br/> {formErrors.postalcode.length > 0 && (
                <span className="errorMessage">{formErrors.postalcode}</span>)}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="address">آدرس</label>
                <textarea rows= "4" id="address"className={formErrors.address.length > 0 ? "error FormField__Input" : "FormField__Input"} placeholder='آدرس خود را با الگو "استان-شهر-آدرس محل سکونت" وارد کنید' name="address" noValidate
                onChange={this.handleChange} />
                <br/> {formErrors.address.length > 0 && (
                <span className="errorMessage">{formErrors.address}</span>)}
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">ثبت نام</button> 
              </div>
            </form>

          </div>
          </>
        )
    }
}


