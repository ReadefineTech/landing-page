import React from "react";
import { EventHandler } from "react";
import iPhone from "../images/iphone.png";
import { useMediaQuery } from "react-responsive";
import EmailRetriever from "./EmailRetriever";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Spinner } from "@chakra-ui/react";

const LanguageDisplay = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  let mobilePhone = isMobile ? "phone-image" : "none-none";
  let desktopPhone = isMobile ? "none-none" : "phone-image";

  // const [isLoading, setLoading] = useState(true);

  // function fakeRequest() {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 1500));
  // }

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       console.log(el);
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="display-all-spinner">
  //       <Spinner></Spinner>
  //     </div>
  //   );
  // }

  return (
    <div className="display-all">
      <motion.div
        // initial={{opacity: 0.5}}
        // animate={{opacity: 1}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="first-image-box">
          <div className="text-body">
            <h3>Redefine the way you read books!</h3>
            <p>
              Powered by deep-tech Artificial Intelligence, Readefine is a first of its kind mobile aplication which provides enthusiastic readers with the opportunity of reading their favourite book while learning a new language or polishing up an old one. It achieves that by building custom-tailored books and applying the most effective scientifically researched methodologies for studying such as contextual learning.
            </p>
          </div>
          <img src={iPhone} className="phone-image"></img>
        </div>
        <div className="first-image-box">
          <img src={iPhone} className={desktopPhone}></img>
          <div className="text-body">
            <h3>Open Source and licensed books in one library!</h3>
            <p>
    Growing in size, our library will provide even the most exotic reader with an inspiring reading. Our goal is to have all of our books available on many different languages and let the users guide their own adventure in the world of learning by letting them customize their
      experience.
            </p>
          </div>
          <img src={iPhone} className={mobilePhone}></img>
        </div>
        <div className="first-image-box">
          <div className="text-body">
            <h3>Building the book</h3>
            <p>
              Readefine provides users with the possibility of rebuilding a book with different parts in different languages.
                - Можеш да избираш ниво на трудност
                - Можеш да избираш как да са разделени - параграфи, изречения
                - Речник с думи, които се добавят на местата на директни синоними, за да можеш да научаваш думите, които искаш
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
      </motion.div>
      <div className="email-section">
        <h3>
          Sign up if you want to be hearing more interesting news from us!
        </h3>
        <EmailRetriever className="email-retriever"></EmailRetriever>
      </div>
      <div className="socials">
        <AiOutlineFacebook className="icon"></AiOutlineFacebook>
        <AiOutlineLinkedin className="icon"></AiOutlineLinkedin>
      </div>
    </div>
  );
};

export default LanguageDisplay;
