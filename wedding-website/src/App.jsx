import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Schedule from "./pages/schedule";
import Travel from "./pages/travel";
import Registry from "./pages/registry";
import Gallery from "./pages/gallery";
import WeddingParty from "./pages/wparty";
import ThingsToDo from "./pages/ttd";
import FAQ from "./pages/faq";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="/registry" element={<Registry />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/wedding-party" element={<WeddingParty />}></Route>
        <Route path="/things-to-do" element={<ThingsToDo />}></Route>
        <Route path="/questions" element={<FAQ />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
