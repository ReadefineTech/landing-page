import './App.css';
// import '@fontsource/poppins';
import '@fontsource/open-sans'
// import Routers from './Routers';
import LanguageChooser from './components/LanguageChooser';
import LanguageDisplay from './components/LanguageDisplay';
import {Routes, Route} from 'react-router-dom';
import { AnimatePresence, motion} from "framer-motion";
import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState(new Set());
  const langOptions = {
    display: () => languages,
    add: (lang) =>  {setLanguages(prev => new Set(prev.add(lang)))},
    remove: (lang) =>{ setLanguages(prev=> new Set([...prev].filter(x=>x!==lang)))},
    clear: () => setLanguages(new Set()),
  };

  const displayLangs = ()=> languages;
  return (
    <AnimatePresence>
    <Routes>
      <Route path='/' element={<LanguageChooser displayLangs={displayLangs} langOptions={langOptions}></LanguageChooser>}>
      </Route>
      <Route path="display" element={<LanguageDisplay displayLangs={displayLangs} langOptions={langOptions}></LanguageDisplay>}></Route>
    </Routes>
    </AnimatePresence>
  );
}

export default App;
