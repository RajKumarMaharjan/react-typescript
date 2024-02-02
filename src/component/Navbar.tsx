import { useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { UseShoppingChart } from "../context/shoppingCartContext";
import ShoppingCart from './ShoppingCart';
import '../css/Navbar.css'



function NavBar() {
    const { cartQuantity } = UseShoppingChart();
    const [showShoppingCart, setShowShoppingCart] = useState(false); 
    const buttonRef = useRef<HTMLDivElement>(null)
 

    const toggleShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart);
    };
    
    const handleClose = (event: MouseEvent) => {
       if(buttonRef.current && event.target && !(buttonRef.current.contains(event.target as Node)))

       setShowShoppingCart(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClose)

        return () => {
            document.removeEventListener('click', handleClose)
        }
    }, [])

    return (
        <div className="flex justify-between items-center h-16 border-b shadow-sm px-12">
            <nav className="xs:text-sm sm:text-xl flex justify-evenly w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
           
           <div ref={buttonRef}>
           <button onClick={toggleShoppingCart} className='flex items-center relative bg-blue-400 rounded-full p-2'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-[#edeaea]' />
                {cartQuantity > 0 && ( 
                    <div className="absolute bg-red-400 rounded-full px-1 ml-3 mt-6 text-xs">
                        {cartQuantity}
                    </div>
                )}
                 <div className={`absolute -top-5 -right-10 ${showShoppingCart ? 'slideInOut' : ''}`}>
                {showShoppingCart && <ShoppingCart />} 
                </div>
            </button>
           </div>
        </div>
    );
}

export default NavBar;
