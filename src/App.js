import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Narbar';
import Shop from './Pages/Shop'
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import banner_women from './Components/Assets/banner_women.jpg'
import banner_men from './Components/Assets/banner_men.png'
import banner_women1 from './Components/Assets/banner_women1.png'
import banner_men1 from './Components/Assets/banner_men1.png'
import ShopBrands from './Pages/ShopBrands';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" banner={banner_men} banner1={banner_men1} />} />
          <Route path='/women' element={<ShopCategory category="women" banner={banner_women} banner1={banner_women1} />} />
          <Route path='/best-seller' element={<Shop />} />
          <Route path='/offers' element={<Shop />} />
          <Route path='/gifting' element={<Shop />} />
          <Route path='/blogs' element={<Shop />} />

          <Route path='/dolce' element={<ShopBrands brands="Dolce & Gabbana" />} />
          <Route path='/carolina' element={<ShopBrands brands="Carolina Herrera" />} />
          <Route path='/gucci' element={<ShopBrands brands="Gucci" />} />
          <Route path='/marc' element={<ShopBrands brands="Marc Jacobs" />} />
          <Route path='/tomford' element={<ShopBrands brands="TOM FORD" />} />
          <Route path='/versace' element={<ShopBrands brands="Versace" />} />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
