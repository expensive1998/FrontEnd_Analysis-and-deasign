import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div className = "FormCenter">
            <form  className="FormFields">
              <div className="FormField">
              <div className="FormField">
                <label className="FormField__Label"  htmlFor="username">نام کاربری</label>
                <input type="text" id="username" className="FormField__Input" placeholder="نام کاربری خود را وارد کنید" name="userName"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label"  htmlFor="password">گذرواژه</label>
                <input type="password" id="password" className="FormField__Input" placeholder="گذرواژه خود را وارد کنید" name="password"/>
              </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">ورود</button>
                </div>
             </div>
            </form>
          </div>
          

        )
    }
}