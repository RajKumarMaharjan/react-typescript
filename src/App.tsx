import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Store from './pages/store';
import About from './pages/about';
import Navbar from './component/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';

function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
