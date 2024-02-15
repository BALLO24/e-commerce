import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import { BrowserRouter as Router, Routes,Route } from  'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"></Route>
          <Route path="/cart"></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
