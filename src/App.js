import React from 'react';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className = "App__Aside"></div> 
      <div  className = "App__Form">
        <div className="FormTitle__Link">
          <a href = "#" className = "FormTitle__Link">ورود</a>
          <p className = "FormTitle__Link">یا</p> 
          <a href= "#" className = "FormTitle__Link FormTitle__Link--Active">ثبت نام</a>
       </div>

        <div className = "FormCenter">
          <form  className="FormFields">
            <div className="FormField">
              <label className="FormField__Label"  htmlFor="firstname">نام</label>
              <input type="text" id="firstname" className="FormField__Input" placeholder="نام خود را وارد کنید" name="firstName"/>
            </div>
            <div className="FormField">
              <label className="FormField__Label"  htmlFor="lastname">نام خانوادگی</label>
              <input type="text" id="lastname" className="FormField__Input" placeholder="نام خانوادگی خود را وارد کنید" name="lastName"/>
            </div>
            <div className="FormField">
              <label className="FormField__Label"  htmlFor="username">نام کاربری</label>
              <input type="text" id="username" className="FormField__Input" placeholder="نام کاربری خود را وارد کنید" name="userName"/>
            </div>
            <div className="FormField">
              <label className="FormField__Label"  htmlFor="password">گذرواژه</label>
              <input type="password" id="password" className="FormField__Input" placeholder="گذرواژه خود را وارد کنید" name="password"/>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">پست الکترونیک</label>
                <input type="email" id="email" className ="FormField__Input" placeholder="پست الکترونیک خود را وارد کنید" name="email"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phonenumber">شماره تماس</label>
                <input type="number" id="phonenumber" className="FormField__Input" placeholder="شماره تماس خود را وارد کنید" name="phonenumber" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="postalcode">کد پستی</label>
                <input type="text" id="postalcode" className="FormField__Input" placeholder="کد پستی خود را وارد کنید" name="postalcode"/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="address">آدرس</label>
                <textarea rows= "4" id="address"className="FormField__Input" placeholder="آدرس خود را وارد کنید" name="address"/>
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">ثبت نام</button>
              </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
