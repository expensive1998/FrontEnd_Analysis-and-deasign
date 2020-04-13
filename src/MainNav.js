import React,{Component} from 'react';

class Navbar extends Component {
    render() {
        return(
            <div className="topNav">
                <ul className="mainnav">
                    <li><a href="#" id="shelf">Shelf</a></li>
                    <li><a href="#" id="sign"> عضویت / ورود</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar