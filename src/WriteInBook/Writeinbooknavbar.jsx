import React, { Component } from 'react'
import './Writeinbooknavbar.css'

class WibookNav extends Component {
    state = {  }
    render() { 
        return (
            <div className="nav">
                <div>
                    <ul className="nav-ul">
                        <li><a id="nav-shelf" href="/">Shelf</a></li>
                        <li><a id="nav-sign1" href="#">درباره ما</a></li>
                        <li><a id="nav-sign1" href="#">دسته بندی</a></li>
                        <li><a id="nav-sign1" href="/">خانه</a></li>
                    </ul>
                </div>
            </div>
        );
    } 
}
 
export default WibookNav;