import './App.css';
import LanguageChooser from './components/LanguageChooser';
import LanguageDisplay from './components/LanguageDisplay';
import {Routes, Route} from 'react-router-dom';

// window.$bulgarianLanguage = false;
// window.$englishLanguage = false;
// window.$italianLanguage = false;
// window.$frenchLanguage = false;

function App() {
  return (
    <Routes>
      <Route path='/' element={<LanguageChooser></LanguageChooser>}></Route>
      <Route path="display" element={<LanguageDisplay></LanguageDisplay>}></Route>
    </Routes>
  );
}

export default App;
