import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Store from './pages/store';
import About from './pages/about';
import Contact from './pages/contact';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <ToastContainer/>
      <ShoppingCartProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Store' element={<Store />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
