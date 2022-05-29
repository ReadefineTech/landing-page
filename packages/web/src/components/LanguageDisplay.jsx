import {React, useEffect, useState} from "react";
import { EventHandler } from "react";
import openLibrary from "../images/28.png";
import goals from "../images/31.png";
import { useMediaQuery } from "react-responsive";
import EmailRetriever from "./EmailRetriever";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
// import languages from "./LanguageObject";

const buildPath= (s,suff) => `/images/${s}_${suff}.png`; 
// for menu image

const buildPathForGif = (s) => `/images/${s}_gif.gif`;

const buildImage=(langSet)=>{
  // console.log(langSet);
  let copy = new Set(langSet);
  if(langSet.has('en'))
  {

    copy.delete('en');
    let [lang] = copy;

    return `en_${lang}`;
  }
  else if(langSet.has('de')){
    copy.delete('de');
    let [lang] = copy;

    return `de_${lang}`;

  }
  else{
    return 'fr_bg';
  }
};

const LanguageDisplay = ({displayLangs,langOptions}) => {
  const [cnt, setCnt] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  let mobilePhone = isMobile ? "phone-image" : "none-none";
  let desktopPhone = isMobile ? "none-none" : "phone-image";
  let path = buildImage(displayLangs());
  // let paths = [buildPath(path,'gif')];
  let gif_path = buildPathForGif(path);

  useEffect(()=>{
    const int = setInterval(()=>{
      setCnt(cnt+1);
    },1000);

    return () => {clearInterval(int)};
  },[]);

  // if(displayLangs().size==2)
  // {
  //   langOptions.clear();
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
          <img src={gif_path} className="phone-image" onClick={()=>{
            console.log(gif_path)
          }}></img>
        </div>
        <div className="first-image-box">
          <img src={openLibrary} className={desktopPhone}></img>
          <div className="text-body">
            <h3>Open Source and licensed books in one library</h3>
            <p>
              Growing in size, our library will provide even the most exotic
              readers with an inspiring reading. Our goal is to have all of our
              books available on as many different languages as possible.
            </p>
          </div>
          <img src={openLibrary} className={mobilePhone}></img>
        </div>
        <div className="first-image-box">
          <div className="text-body">
            <h3>Building the custom-tailored experience </h3>
            <p>
                Readefine lets curious readers choose what languages to be included in the book and their level of difficulty. On another note, there is always
                the possibility of putting the words you want to learn in the dictionary and the application will generate the contextual parts with the words you want learn.
            </p>
          </div>
          <img src={buildPath(path, 'menu')} className="phone-image"></img>
        </div>
        <div className="first-image-box">
          <img src={goals} className={desktopPhone}></img>
          <div className="text-body">
            <h3>Tracking goals</h3>
            <p>
            The goal metrics provide readers with a structured way to track and visualize their progress throughout their journey.
            </p>
          </div>
          <img src={goals} className={mobilePhone}></img>
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
