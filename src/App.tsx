<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import './App.css'
>>>>>>> 2a8e586fa768b33bc0255a1c6b60a57320a19e54
import SearchPage from './pages/SearchPage/SearchPage' 
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Activites from './pages/Activites/Activites';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/checkout/checkout'; // Importez le composant Checkout
import Footer from './compenants/Footer/Footer';
<<<<<<< HEAD
=======
import ProductDetailsPage from './pages/Details/ProductDetailsPage';
import { BrowserRouter as Router,  Routes , Route } from 'react-router-dom';

>>>>>>> 2a8e586fa768b33bc0255a1c6b60a57320a19e54

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
<<<<<<< HEAD
        <Route path='/search' element={<SearchPage/>}> </Route>
        
=======
        <Route path='/search' element={<SearchPage/>}/> 
        
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
        <Route path='/Product-details' element={<ProductDetailsPage/>}> </Route>
>>>>>>> 2a8e586fa768b33bc0255a1c6b60a57320a19e54
      </Routes>
      <Footer/>
    </Router>
  )

    
}

export default App;
