import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './normalize.css';

import Header from  './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import PlanesPage from './pages/PlanesPage';
import GruposPage from './pages/GruposPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="planes" element={<PlanesPage/>}/>
          <Route path="grupos" element={<GruposPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
