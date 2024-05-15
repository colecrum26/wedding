import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Schedule, Travel, Registry, Gallery, WeddingParty, ThingsToDo, FAQ, RSVPSearch, RSVPRespond } from "./pages";
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
        <Route path="/rsvp-find-party" element={<RSVPSearch />}></Route>
        <Route path="/rsvp-respond" element={<RSVPRespond />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
