<<<<<<< HEAD
import './App.css'
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Activites from './pages/Activites/Activites';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/checkout/checkout'; // Importez le composant Checkout
>>>>>>> version1

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
=======
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/activites" element={<Activites/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
    </Router>
  );
>>>>>>> version1
}

export default App;
