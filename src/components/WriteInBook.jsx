import React, { Component } from 'react';

class WriteInPage extends Component {
    state = {
        numday : [1 , 31]
    }
    render() { 
        return ( 
            <div className="writeinbook">

                <div className="witopnav">
                    <a href="/">خانه</a>
                    <div className="navbar">
                        <button class="dropbtn">Dropdown 
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>    
                    <a href="/"></a>
                </div>

                <div className="formwibook">
                    <fieldset className="fieldset">
                        <legend>اطلاعات کتاب خود را وارد کنید</legend>
                        <form action="" target="_black">
                            <label htmlFor="title">نام کتاب</label>
                            <input id="text" name="wibook" type="text" required placeholder="نام کتاب را وارد کنید" onFocus/><br/>

                            <label htmlFor="author">نام نویسنده</label>
                            <input type="text" name="wibook" id="author" required placeholder="نام نویسنده را وارد کنید" /><br/>

                            <label htmlFor="publisher">ناشر</label>
                            <input type="text" name="wibook" id="publisher" required placeholder="نام ناشر را وارد کنید" /><br/>
                            
                            <label htmlFor="category">دسته بندی</label>
                            <select type="radio" name="wibook" id="category" required >
                                <option value="">تاریخی</option>
                                <option value="">سیساسی</option>
                                <option value="">تخیلی</option>
                            </select><br/>

                            <label htmlFor="isbn">ISBN</label>
                            <input type="text" name="wibook" id="isbn"/><br/>

                            
                                                        
                            <label htmlFor="price">قیمت</label>
                            <input type="number" name="wibook" id="price"required placeholder="قیمت را وارد کنید"/><br/>

                            <label htmlFor="img">تصویر کتاب</label>
                            <input type="file" name="wibook" id="img"/><br/>

                            <label htmlFor="img">تصویر کتاب</label>
                            <input type="file" name="wibook" id="img"/><br/>
                            
                            <label htmlFor="desc">توضیحات (خلاصه)</label>
                            <textarea name="wibook" id="desc" cols="30" rows="10" placeholder="توضیحات خود را وارد کنید"></textarea>
                        </form>
                    </fieldset>
                </div>    
            </div>
         );
    }
}

export default WriteInPage;