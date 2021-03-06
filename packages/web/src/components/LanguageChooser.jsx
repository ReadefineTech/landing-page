import React from "react";
import './p.css';
import Logo from '../images/readefine_logo.png';
import { useState } from "react";
import languages from './LanguageObject';
import { motion } from "framer-motion";
import { BrowserRouter, useNavigate} from "react-router-dom";

// let bulgarianFlag = false;
// let englishFlag = false;
// let italianFlag = false;
// let frenchFlag = false;
// let numClickedLangs = 0;

const LanguageChooser = ({displayLangs,langOptions}) => {
    let navigate = useNavigate();
    const [clickedLangBG, changeClickedStateBG] = useState("box-for-lang");
    const [clickedLangEN, changeClickedStateEN] = useState("box-for-lang");
    const [clickedLangIT, changeClickedStateIT] = useState("box-for-lang");
    const [clickedLangFR, changeClickedStateFR] = useState("box-for-lang");
    const [cnt, setCnt] = useState(0);
    // const [logged, setLogged] = useState(false);

    // if(logged)
    // {
    //     setLogged(false);
    // }

    // console.log('Component ',cnt, displayLangs());
    let checkTwoLangsClicked = () => {
        // console.log('checkTwoLangsClicked ',cnt, displayLangs())
        if(cnt==2){
            // setLogged(true);
            setTimeout(()=>{
                navigate('/display');
            }, "1000"); // 1s timeout
        }
    }

    checkTwoLangsClicked();

    let checkState = (clickedLang, lang) =>{
        // console.log('checkState ',cnt, displayLangs());
        if(displayLangs().size===2){
            displayLangs().clear();
            setCnt(0);
        }
        if(displayLangs().has(lang))
        {
            langOptions.remove(lang);
            setCnt(cnt-1);
        }else{
            langOptions.add(lang);
            setCnt(cnt+1);
            checkTwoLangsClicked();
        }
        if(clickedLang === "box-for-lang"){
            // langOptions.add(lang);
            // setCnt(cnt+1);
            // console.log('added '+lang)
            // console.log(langOptions.display())
            return "box-for-lang-clicked";
        } 
        else {
            if(clickedLang === "box-for-lang-clicked"){
                // langOptions.remove(lang);
                // setCnt(cnt-1);
                // console.log('removed '+lang)
                // console.log(langOptions.display())
                return "box-for-lang-clicked-back";
            } else {
                return "box-for-lang-clicked";
            }
        }
    }


    // let increaseFlags = (flag) => {
    //     if(flag){
    //         numClickedLangs--;
    //     } else {
    //         numClickedLangs++;
    //     }
    // }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className="init-box-lang">
            <img className="readefine-logo" src={Logo}></img>
            <h3 className="choose-lang-header">Choose two languages:</h3>
            <div className="lang-box">
                <div className={clickedLangBG} onClick={()=>{
                    changeClickedStateBG(checkState(clickedLangBG, "bg"));
                    // increaseFlags(bulgarianFlag);
                    // bulgarianFlag = !bulgarianFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">BG</p>
                </div>
            <div className={clickedLangEN} onClick={()=>{changeClickedStateEN(checkState(clickedLangEN, "en"));
                    // increaseFlags(englishFlag);
                    // englishFlag = !englishFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">EN</p>
                </div>
                <div className={clickedLangFR} onClick={()=>{changeClickedStateFR(checkState(clickedLangFR, "fr"));
                    // increaseFlags(frenchFlag);
                    // frenchFlag = !frenchFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">FR</p>
                </div>
                <div className={clickedLangIT} onClick={()=>{changeClickedStateIT(checkState(clickedLangIT, "de"));
                    // increaseFlags(italianFlag);
                    // italianFlag = !italianFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">DE</p>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default LanguageChooser;
