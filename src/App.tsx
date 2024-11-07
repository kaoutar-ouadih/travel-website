import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import SearchPage from './pages/SearchPage/SearchPage' 
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Activites from './pages/Activites/Activites';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/checkout/checkout'; // Importez le composant Checkout

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/activites" element={<Activites/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} /> 
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
      </Routes>
    </Router>
  )

    
}

export default App;
