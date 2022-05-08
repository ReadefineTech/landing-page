import React from "react";
import './p.css';
import Logo from '../images/readefine_logo.png';
import { useState } from "react";
import BgLang from '../images/bg-lang-pic.png';

const LanguageChooser = () => {
    const [clickedLangBG, changeClickedStateBG] = useState("box-for-lang");
    const [clickedLangEN, changeClickedStateEN] = useState("box-for-lang");
    const [clickedLangIT, changeClickedStateIT] = useState("box-for-lang");
    const [clickedLangFR, changeClickedStateFR] = useState("box-for-lang");
    return (
        <div className="init-box-lang">
            <img className="readefine-logo" src={Logo}></img>
            <h3 className="choose-lang-header">Choose two languages:</h3>
            <div className="lang-box">
                <div className={clickedLangBG} onClick={()=>changeClickedStateBG("box-for-lang-clicked")}>
                    <p className="lang-color">BG</p>
                </div>
                <div className={clickedLangEN} onClick={()=>changeClickedStateEN("box-for-lang-clicked")}>
                    <p className="lang-color">EN</p>
                </div>
                <div className={clickedLangFR} onClick={()=>changeClickedStateFR("box-for-lang-clicked")}>
                    <p className="lang-color">FR</p>
                </div>
                <div className={clickedLangIT} onClick={()=>changeClickedStateIT("box-for-lang-clicked")}>
                    <p className="lang-color">IT</p>
                </div>
                {/* <img className="lang-box-tags" src={BgLang}></img> */}
                {/* <img className="lang-box-tags" src={BgLang}></img> */}
                {/* <img className="lang-box-tags" src={BgLang}></img> */}
            </div>
        </div>
    )
}

export default LanguageChooser;