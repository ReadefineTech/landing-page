import React from "react";
import './p.css';
import Logo from '../images/readefine_logo.png';
import { useState } from "react";
import BgLang from '../images/bg-lang-pic.png';

    let bulgarianFlag = false;
    let englishFlag = false;
    let italianFlag = false;
    let frenchFlag = false;
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
            // change window open to rerouting when page is created
            window.open("https://facebook.com", "_self");
        }
    }

    return (
        <div className="init-box-lang">
            <img className="readefine-logo" src={Logo}></img>
            <h3 className="choose-lang-header">Choose two languages:</h3>
            <div className="lang-box">
                <div className={clickedLangBG} onClick={()=>{
                    changeClickedStateBG(checkState(clickedLangBG))
                    if(bulgarianFlag){
                        numClickedLangs--;
                    } else {
                        numClickedLangs++;
                    }
                    bulgarianFlag = !bulgarianFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">BG</p>
                </div>
            <div className={clickedLangEN} onClick={()=>{changeClickedStateEN(checkState(clickedLangEN))
                    if(englishFlag){
                        numClickedLangs--;
                    } else {
                        numClickedLangs++;
                    }
                    englishFlag = !englishFlag;
                    checkTwoLangsClicked();
                    }}>
                    <p className="lang-color">EN</p>
                </div>
                <div className={clickedLangFR} onClick={()=>{changeClickedStateFR(checkState(clickedLangFR))
                    if(frenchFlag){
                        numClickedLangs--;
                    } else {
                        numClickedLangs++;
                    }
                    frenchFlag = !frenchFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">FR</p>
                </div>
                <div className={clickedLangIT} onClick={()=>{changeClickedStateIT(checkState(clickedLangIT))
                    if(italianFlag){
                        numClickedLangs--;
                    } else {
                        numClickedLangs++;
                    }
                    italianFlag = !italianFlag;
                    checkTwoLangsClicked();
                }}>
                    <p className="lang-color">IT</p>
                </div>
            </div>
        </div>
    )
}

export default LanguageChooser;