import './App.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import CommentsBlock from 'simple-react-comments';
import React, { Component } from 'react'
import CommentBox from './CommentBox'


const getRate = ({rating}) => console.log(rating);
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comments:[],
    };
  }
  
  
  render() {
    const customStyles = {
      comment: base => ({
      ...base,
      color: 'red',
      content :"ثبت نظر",
      }),
    };
    return (
      <>
    
      <div className = "shlfNav"><h2>shlf</h2></div>
      <div className = "logo">
        <ul className = "navbar">
          <li><a href = "#">خانه</a></li>
          <li><a href = "#">خرید کتاب</a></li>
          <li><a href = "#">قرض کتاب</a></li>
          <li><a href = "#">دسته بندی کتاب ها</a></li>
          <li><a href = "#">درباره ما</a></li>
        </ul>
      </div>
      <div className = "fullPage">
        
        <div className = "bookInfo_box">
          <div className = "bookPics"></div>
          <div className = "rating"> <Rater total={5} rating={0} interactive = {false} onRate={getRate}/>
          <button className = "hide_show">امتیاز بدهید</button>
          </div>
          
        </div>
        <div className = "moreInfo_box">
          <div className = "mb_navbar">
            <ul className = "mb_navLinks">
              <li><a href = "#">معرفی کتاب</a></li>
              <li><a href = "#">مشخصات</a></li>
              <li><a href = "#">نظرات کاربران</a></li>
            </ul>

          
           <CommentBox/>

          </div>
          </div>
        </div>
    </>
    );
 }
}



