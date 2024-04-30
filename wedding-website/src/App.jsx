import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule"></Route>
        <Route path="/travel"></Route>
        <Route path="/registry"></Route>
        <Route path="/gallery"></Route>
        <Route path="/wedding-party"></Route>
        <Route path="/things-to-do"></Route>
        <Route path="/FAQ"></Route>
      </Routes>
    </Router>
  );
}

export default App;
