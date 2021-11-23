import './App.css';
import Nav from "./Components/Navbar/index";
import Foot from "./Components/Footer/index";
import Main from "./Pages/Landing-page/index";
import Main2 from "./Pages/Sub-page/index";
import Information from './Pages/Information-page/index';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subpage" element={<Main2 />} />
        <Route path="/info" element={<Information />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;