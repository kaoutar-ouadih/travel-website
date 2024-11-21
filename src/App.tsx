import './App.css'
import { BrowserRouter as Router,  Routes , Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage' 
import Home from './pages/Home/Home';
import Activites from './pages/Activites/Activites';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/checkout/checkout'; 
import Footer from './compenants/Footer/Footer';
import ProductDetailsPage from './pages/Details/ProductDetailsPage';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Trips from './pages/Trips';
import News from './pages/News/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/discover" element={<SearchPage />} />
        <Route path="/activites" element={<Activites/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />   
        <Route path='/searchPage' element={<SearchPage />}> </Route>
        <Route path="/checkout" element={<Checkout />} />  
        <Route path="/Trips" element={<Trips />} /> 
        <Route path="/News" element={<News />} />
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
        <Route path='/Product-details' element={<ProductDetailsPage/>}> </Route>
      </Routes>
      <Footer/>
    </Router>
  )

    
}

export default App;
