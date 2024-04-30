import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
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
