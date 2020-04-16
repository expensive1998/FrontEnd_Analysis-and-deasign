import React, { Component , capacity , Input , Label , FormGroup , CustomInput } from 'react';
import './Writeinbook.css'
import Writeinbooknavbar from './Writeinbooknavbar';

class Wibook extends Component {
   /* state = {
        leader_info: {
          nationalID: "",
          has_car: false,
          car_capacity: "",
          car_model: "",
          age: "",
          gender: ""
        }
    }*/
    render() { 
        
    /*const model = this.state.leader_info.has_car ? <Input name="car_model" 
        value={this.state.leader_info.car_model} 
        onChange={this.handleChange} 
        type="text" 
        /> :
    <Input name="car_model" disabled value={this.state.leader_info.car_model} onChange={this.handleChange} type="text" />
                      
    
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label id="form_label">آیا برای گردشگری درصورت درخواست مالک خودرو میباشید؟</Label>
            <CustomInput onChange={this.handleChange_hasCar} type="switch" id="exampleCustomSwitch" className="switch" name="customSwitch" />
            <Label id="form_label">مدل ماشین</Label>
            {model}
            <Label id="form_label">ظرفیت ماشین</Label>
            {capacity}
          </FormGroup>
   */
        return ( 
        <div className="writeinbook">
            <Writeinbooknavbar />
            <div className="sell">
                <a id="sell" href="/writein">فروش</a>
                <p id="or">||</p>
                <a id="lend" href="/Borrow">اجاره</a>
            </div>
            <div className="wibook-form">
                <fieldset class="fieldset">
                    <legend className="legend">لطفا اطالاعات کتاب را وارد کنید</legend>
                    <form action="">

                    <label id="label" htmlFor="name" >نام کتاب</label><br/>
                    <input type="text" name="wi-form" id="name" required placeholder="نام خود را وارد کنید" autocomplete="off"/><br/>
                    <label id="label" htmlFor="author">نام نویسنده</label><br/>
                    <input type="text" name="wi-form" id="author" placeholder="نام نویسنده را وارد کنید" autocomplete="off" /><br/>
                    <label id="label" htmlFor="category">دسته بندی</label><br/>
                    <select name="wi-form" id="category" placeholder="دسته بندی را انتخاب کنید">
                        <option value=""></option>
                        <option value="">تاریخی</option>
                        <option value="">سیاسی</option>
                        <option value="">علمی</option>
                    </select><br/>
                    <label id="label" htmlFor="isbn">شماره شابک</label><br/>
                    <input type="number" name="wi-form" id="isbn" required placeholder="شماره شابک را وارد کنید" autocomplete="off"/><br/>
                    <label id="label" htmlFor="publisher">ناشر</label><br/>
                    <input type="text" name="wi-form" id="publisher" placeholder="نام ناشر را وارد کنید" autocomplete="off"/><br/>
                    <label id="label" htmlFor="price">قیمت</label><br/>
                    <input type="number" name="wi-form" id="price" required placeholder="قیمت را وارد کنید" autocomplete="off" /><br/>
                    <label id="label" htmlFor="img1">عکس کتاب (شماره۱)</label><br/>
                    <input type="file" id="img" name="wi-form" accept="image/*"/><br/>
                    <label id="label" htmlFor="img1">عکس کتاب (شماره۲)</label><br/>
                    <input type="file" id="img" name="wi-form" accept="image/*"/><br/>
                    <label id="label" htmlFor="e-book">کتاب الکترونیکی</label><br/>
                    <input type="file" name="wi-form" id="e-book" accept="pdf/*"/><br/>
                    <label id="label" htmlFor="s-book">کتاب صوتی</label><br/>
                    <input type="file" name="wi-form" id="e-book" accept="mp3/*"/><br/>   
                    <textarea name="wi-book" id="textarea" cols="40" rows="5" placeholder="توضیحات">
                    </textarea>   <br/>             

                    <input type="submit" value="آپلود" id="form-submit"/>

                </form>                    
                </fieldset>
            </div>
            <br/><br/><br/><br/><br/><br/>            
        </div>    
        );
    }
}
 
export default Wibook;