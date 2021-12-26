import './App.css';
import Nav from "./Components/Navbar/index";
import Foot from "./Components/Footer/index";
import Main from "./Pages/Landing-page/index";
import Main2 from "./Pages/Sub-page/index";
import WitcherData from "./Data/WitcherData.json";
import LOTRData from "./Data/LOTRData.json";
import ACData from "./Data/ACData.json";
import HarryPotterData from "./Data/HarryPotterData.json";
import GOWData from "./Data/GOWData.json";
import GTAData from "./Data/GTAData.json";
import Information from './Pages/Information-page/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lordoftherings" element={<Main2 title="The Lord Of The Rings" data={LOTRData} />} />
        <Route path="/assassinscreed" element={<Main2 title="Assassin's Creed" data={ACData} />} />
        <Route path="/harrypotter" element={<Main2 title="Harry Potter" data={HarryPotterData} />} />
        <Route path="/godofwar" element={<Main2 title="God Of War" data={GOWData} />} />
        <Route path="/grandtheftauto" element={<Main2 title="Grand Theft Auto" data={GTAData} />} />
        <Route path="/witcher" element={< Main2 title="The Witcher" data={WitcherData} />} />
        <Route path="/:title" element={<Information />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;