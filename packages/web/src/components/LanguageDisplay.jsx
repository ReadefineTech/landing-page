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
            <h3>Redefine the way you read books</h3>
            <p>
              Powered by deep-tech Artificial Intelligence, Readefine is a first
              of its kind mobile aplication which provides enthusiastic readers
              with the opportunity of reading their favourite book while
              learning a new language or polishing up an old one. It achieves
              that by building custom-tailored books and applying the most
              effective scientifically researched contextual learning
              methodologies.
            </p>
          </div>
          <img src={iPhone} className="phone-image"></img>
        </div>
        <div className="first-image-box">
          <img src={iPhone} className={desktopPhone}></img>
          <div className="text-body">
            <h3>Open Source and licensed books in one library</h3>
            <p>
              Growing in size, our library will provide even the most exotic
              readers with an inspiring reading. Our goal is to have all of our
              books available on as many different languages as possible.
            </p>
          </div>
          <img src={iPhone} className={mobilePhone}></img>
        </div>
        <div className="first-image-box">
          <div className="text-body">
            <h3>Building the custom-tailored experiencet </h3>
            <p>
                Readefine lets curious readers choose what languages to be included in the book and their level of difficulty. On another note, there is always
                the possibility of putting the words you want to learn in the dictionary and the application will generate the contextual parts with the words you want learn.
            </p>
          </div>
          <img src={iPhone} className="phone-image"></img>
        </div>
        <div className="first-image-box">
          <img src={iPhone} className={desktopPhone}></img>
          <div className="text-body">
            <h3>Tracking goals</h3>
            <p>
            The goal metrics provide readers with a structured way to track and visualize their progress throughout their journey.
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
