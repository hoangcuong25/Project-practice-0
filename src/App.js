import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Narbar';
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Shop />} />
          <Route path='/women' element={<Shop />} />
          <Route path='/best-seller' element={<Shop />} />
          <Route path='/offers' element={<Shop />} />
          <Route path='/gifting' element={<Shop />} />
          <Route path='/blogs' element={<Shop />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
