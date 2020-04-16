import React, { Component } from 'react';
import './Writeinbook.css'
import Writeinbooknavbar from './Writeinbooknavbar';

class Wibook extends Component {
    render() { 

        return ( 
        <div className="writeinbook">
            <Writeinbooknavbar />
            <div className="wibook-form">
                <fieldset class="fieldset">
                    <legend className="legend">لطفا اطالاعات کتاب را وارد کنید</legend>
                    <form action="">

                    <label htmlFor="name" >نام کتاب</label><br/>
                    <input type="text" name="wi-form" id="name" required placeholder="نام خود را وارد کنید"/><br/>
                    <label htmlFor="author">نام نویسنده</label><br/>
                    <input type="text" name="wi-form" id="author"/><br/>
                    <label htmlFor="category">دسته بندی</label><br/>
                    <select name="wi-form" id="category">
                        <option value=""></option>
                        <option value="">تاریخی</option>
                        <option value="">سیاسی</option>
                        <option value="">علمی</option>
                    </select><br/>
                    <label htmlFor="isbn">شماره شابک</label><br/>
                    <input type="number" name="wi-form" id="isbn"/><br/>
                </form>                    
                </fieldset>
            </div>
        </div>    
        );
    }
}
 
export default Wibook;