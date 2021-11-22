import './App.css';
import Nav from "./Components/Navbar/index";
import Foot from "./Components/Footer/index";
import Main from "./Pages/Landing-page/index";
import Main2 from "./Pages/Sub-page/index";
import Information from './Pages/Information-page/index';
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Main2 />
      <Information />
      <Foot />
    </div>
  );
}

export default App;