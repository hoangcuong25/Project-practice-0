import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Narbar';
import Shop from './Pages/Shop'

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
          <Route path='/blogs' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
