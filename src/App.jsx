import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopContextProvider from './context/ShopContextProvider';
function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>

      </ShopContextProvider>
    </div>
  )
}

export default App
