import Home from './screens/Home.jsx';
import Nav from './components/Nav.jsx';
import Photos from './screens/Photos.jsx';
import { Routes, Route } from "react-router-dom"
import './App.css';
import DetailPhoto from './screens/DetailPhoto.jsx';
import CreatePhoto from './screens/CreatePhoto.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<Photos />} />
        <Route path="/photo/:id" element={<DetailPhoto />} />
        <Route path="/add-photo" element={<CreatePhoto />} />
      </Routes>
    </div>
  );
}

export default App;
