import React from "react";
import {Routes, Route} from 'react-router-dom';
import LanguageChooser from './components/LanguageChooser';
import LanguageDisplay from './components/LanguageDisplay';
import loadable from '@loadable/component';
import { Spinner } from '@chakra-ui/react'

// const Loader = loadable(()=>import(Spinner));

// const LangChoose = loadable(() => import("./components/LanguageChooser"),{
//   fallback: <Spinner></Spinner>
// });

// const LangDisplay = loadable(() => import("./components/LanguageDisplay"),{
//   fallback: <Spinner></Spinner>
// });

function Routers({langOptions}) {


  return (
    <Routes>
      <Route path='/' element={<LanguageChooser langOptions={langOptions}></LanguageChooser>}>
      </Route>
      <Route path="display" element={<LanguageDisplay langOptions={langOptions}></LanguageDisplay>}></Route>
    </Routes>
  );
}

export default Routers;