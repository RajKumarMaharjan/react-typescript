import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { UseShoppingChart } from "../context/shoppingCartContext";

function NavBar() {
    const { getCartCount } = UseShoppingChart();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Update the cart count whenever the cart is modified
        setCartCount(getCartCount());
    }, [getCartCount]);

    return (
        <div className="flex justify-between items-center h-16 border-b shadow-sm mb-4 px-12">
            <nav className="text-xl flex justify-evenly w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            
            <button className='flex items-center relative bg-blue-400 rounded-full p-2'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-[#edeaea]' />
                {cartCount > 0 && (
                    <div className="absolute bg-red-400 rounded-full px-1 ml-3 mt-6 text-xs">
                        {cartCount} 
                    </div>
                )}
            </button>
        </div>
    );
}

export default NavBar;
