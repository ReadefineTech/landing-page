import './App.css';
// import '@fontsource/poppins';
import '@fontsource/open-sans'
import Routers from './Routers';
import { AnimatePresence, motion} from "framer-motion";

function App() {
  return (
    <AnimatePresence>
    <Routers></Routers>
    </AnimatePresence>
  );
}

export default App;
