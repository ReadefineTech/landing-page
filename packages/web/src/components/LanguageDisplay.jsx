import React from "react";
import { EventHandler } from "react";
import iPhone from "../images/iphone.png";
import { useMediaQuery } from "react-responsive";

const LanguageDisplay = () => {
  // let text = "Lorem ipsum dolor sit amet."
  // let bbb = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consectetur."

  const isMobile = useMediaQuery({ query: '(max-width: 600px)'});
  let mobilePhone = isMobile? "phone-image" : "none-none";
  let desktopPhone = isMobile? "none-none" : "phone-image";
  // const renderDesignForPhone = (header, body, image)=>{
  //     if(isMobile){
  //     return (
  //     <div className="first-image-box">
  //      <div className="text-body">
  //       <h3>{header}</h3>
  //       <p>
  //         {body}
  //       </p>
  //     </div>
  //     <img src={image} className="phone-image"></img>
  //     </div>
  //     )
  // } else{
  //     return (
  //     <div className="first-image-box">
  //     <img src={image} className="phone-image"></img>
  //      <div className="text-body">
  //       <h3>{header}</h3>
  //       <p>
  //         {body}
  //       </p>
  //     </div>
  //     </div>
  //     )
  // }}

  return (
    <div className="display-all">
      <div className="first-image-box">
        <div className="text-body">
          <h3>Readefine the way you are reading books!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, ipsum quis corrupti nemo nihil dolorem blanditiis
            <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, voluptatibus?<br></br>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Similique necessitatibus perferendis
            qui nam tempore quae dolorem velit harum totam. Earum.
          </p>
        </div>
        <img src={iPhone} className="phone-image"></img>
      </div>
      <div className="first-image-box">
          <img src={iPhone} className={desktopPhone}></img>
        <div className="text-body">
          <h3>Readefine the way you are reading books!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, ipsum quis corrupti nemo nihil dolorem blanditiis
            <br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, voluptatibus?<br></br>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Similique necessitatibus perferendis
            qui nam tempore quae dolorem velit harum totam. Earum.
          </p>
        </div>
        <img src={iPhone} className={mobilePhone}></img>
      </div>
    </div>
  );
};

export default LanguageDisplay;
