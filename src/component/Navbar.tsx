
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div className="flex justify-between items-center h-16 border-b shadow-sm mb-4 px-12">
            <nav className="text-xl flex justify-evenly w-full">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/store">Store</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            
            <button className='flex items-center relative bg-blue-400 rounded-full p-2'>
                <FontAwesomeIcon icon={faShoppingCart} className='text-[#edeaea]' />
                <div className="absolute bg-red-400 rounded-full px-1 ml-3 mt-6 text-xs">
                    3
                </div>
            </button>
          
        </div>
    );
}

export default NavBar;
