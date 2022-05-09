import React from "react";
import './p.css';
import Logo from '../images/readefine_logo.png';
import { useState } from "react";
import languages from './LanguageObject';

    // let bulgarianFlag = false;
    // let englishFlag = false;
    // let italianFlag = false;
    // let frenchFlag = false;
    let numClickedLangs = 0;

const LanguageChooser = () => {

    const [clickedLangBG, changeClickedStateBG] = useState("box-for-lang");
    const [clickedLangEN, changeClickedStateEN] = useState("box-for-lang");
    const [clickedLangIT, changeClickedStateIT] = useState("box-for-lang");
    const [clickedLangFR, changeClickedStateFR] = useState("box-for-lang");

    let checkState = (clickedLang) =>{
        if(clickedLang === "box-for-lang"){
            return "box-for-lang-clicked";
        } else {
            if(clickedLang === "box-for-lang-clicked"){
                return "box-for-lang-clicked-back";
            } else {
                return "box-for-lang-clicked";
            }
        }
    }

    let checkTwoLangsClicked = () => {
        console.log(numClickedLangs);
        if(numClickedLangs == 2){
            setTimeout(()=>{
                window.open("display", "_self");
            }, "1000"); // 1s timeout
        }
    }

    let increaseFlags = (flag) => {
        if(flag){
            numClickedLangs--;
        } else {
            numClickedLangs++;
        }
    }

    return (
        <div className="init-box-lang">
            <img className="readefine-logo" src={Logo}></img>
            <h3 className="choose-lang-header">Choose two languages:</h3>
            <div className="lang-box">
                <div className={clickedLangBG} onClick={()=>{
                    changeClickedStateBG(checkState(clickedLangBG))
                    increaseFlags(languages.bulgarianFlag);
                    languages.bulgarianFlag = !languages.bulgarianFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">BG</p>
                </div>
            <div className={clickedLangEN} onClick={()=>{changeClickedStateEN(checkState(clickedLangEN))
                    increaseFlags(languages.englishFlag);
                    languages.englishFlag = !languages.englishFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">EN</p>
                </div>
                <div className={clickedLangFR} onClick={()=>{changeClickedStateFR(checkState(clickedLangFR))
                    increaseFlags(languages.frenchFlag);
                    languages.frenchFlag = !languages.frenchFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">FR</p>
                </div>
                <div className={clickedLangIT} onClick={()=>{changeClickedStateIT(checkState(clickedLangIT))
                    increaseFlags(languages.italianFlag);
                    languages.italianFlag = !languages.italianFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">IT</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageChooser;