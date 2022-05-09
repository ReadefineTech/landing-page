import './App.css';
import LanguageChooser from './components/LanguageChooser';
import LanguageDisplay from './components/LanguageDisplay';
import {Routes, Route} from 'react-router-dom';
// import '@fontsource/poppins';
import '@fontsource/open-sans'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LanguageChooser></LanguageChooser>}></Route>
      <Route path="display" element={<LanguageDisplay></LanguageDisplay>}></Route>
    </Routes>
  );
}

export default App;
