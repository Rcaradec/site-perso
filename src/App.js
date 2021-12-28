import "./App.scss";
import { Routes, Route } from "react-router-dom";
//? IMPORT COMPONENTS
import Main from "./components/Main";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Formation from "./components/Formation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </div>
  );
}

export default App;
