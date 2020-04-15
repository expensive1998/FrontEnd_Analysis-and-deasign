import React from 'react';
import './App.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const getRate = ({rating}) => console.log(rating);
function App() {
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
          <div className = "rating"> <Rater total={5} rating={0} onRate={getRate}/></div>
        </div>
        <div className = "moreInfo_box">
          <div className = "mb_navbar">
            <ul className = "mb_navLinks">
              <li><a href = "#">معرفی کتاب</a></li>
              <li><a href = "#">مشخصات</a></li>
              <li><a href = "#">نظرات کاربران</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;