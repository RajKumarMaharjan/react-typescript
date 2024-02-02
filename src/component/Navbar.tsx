import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { UseShoppingChart } from "../context/shoppingCartContext";
import ShoppingCart from './ShoppingCart';


function NavBar() {
    const { cartQuantity } = UseShoppingChart();
    const [showShoppingCart, setShowShoppingCart] = useState(false); 

    const toggleShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart);
    };
    

    return (
        <div className="flex justify-between items-center h-16 border-b shadow-sm mb-4 px-12">
            <nav className="text-xl flex justify-evenly w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
           
            <button onClick={toggleShoppingCart} className='flex items-center relative bg-blue-400 rounded-full p-2'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-[#edeaea]' />
                {cartQuantity > 0 && ( 
                    <div className="absolute bg-red-400 rounded-full px-1 ml-3 mt-6 text-xs">
                        {cartQuantity}
                    </div>
                )}
                <div className='absolute top-12 right-0'>
                {showShoppingCart && <ShoppingCart />} 
                </div>
            </button>
        </div>
    );
}

export default NavBar;
