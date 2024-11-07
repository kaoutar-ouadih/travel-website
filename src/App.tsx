import './App.css'
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/searchPage' element={<SearchPage/>}> </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
