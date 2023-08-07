import Home from './screens/Home.jsx';
import Nav from './components/Nav.jsx';
import Photos from './screens/Photos.jsx';
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
