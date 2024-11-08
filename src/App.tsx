
import { BrowserRouter as Router,  Routes , Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage' 
import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Activites from './pages/Activites/Activites';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/checkout/checkout'; // Importez le composant Checkout
import Footer from './compenants/Footer/Footer';
import ProductDetailsPage from './pages/Details/ProductDetailsPage';


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
        <Route path='/search' element={<SearchPage/>}/> 
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
        <Route path='/Product-details' element={<ProductDetailsPage/>}> </Route>
      </Routes>
      <Footer/>
    </Router>
  )

    
}

export default App;
