
import './App.css'
import Footer from './components/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SearchPage from './pages/SearchPage' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
        <Route path='/Product-details' element={<ProductDetailsPage/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

    
}

export default App
