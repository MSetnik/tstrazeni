import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/organisms/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar link1={'Početna'} link2={'O nama'} link3={'Rezerviraj'}  />



      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
