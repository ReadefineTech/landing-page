import React from "react";
import { EventHandler } from "react";
import iPhone from '../images/iphone.png';

const LanguageDisplay = () => {
return (
    <div className="display-all">
        <div className="first-image-box">
            <div className="text-body">
                <h3>Readefine the way you are reading books!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsum quis corrupti nemo nihil dolorem blanditiis<br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, voluptatibus?<br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique necessitatibus perferendis qui nam tempore quae dolorem velit harum totam. Earum.</p>
            </div>
            <img src={iPhone} className="phone-image"></img>
        </div>
    </div>
)
}

export default LanguageDisplay;