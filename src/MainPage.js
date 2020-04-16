import React from 'react';
import MainNav from './MainNav'
import './App.css';

function mainPage(){
    return(
        <div className="mainpage">
            <div>
                <div className="topmain">
                    <MainNav />
                    <p id="title">Shelf</p>
                    <a href="/" id="dot"> Get Start </a>
                </div>
                <div className="bottommain">
                    <a id="movedown" href="#more">more</a>
                    <div id="more">
                        <h2>Why Choose Us...?</h2>
                        <p>We will give you the best service and knowledge about BOOKs</p> 
                    </div>
                    <div className="aboutus">
                        <a id="aboutus" href="/">About Us</a>
                        <a id="wwd" href="/">What We Do?</a>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default mainPage;