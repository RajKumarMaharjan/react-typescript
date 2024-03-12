import { useEffect, useState, useRef } from 'react';
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { UseShoppingChart } from "../context/shoppingCartContext";
import ShoppingCart from './ShoppingCart';
import '../css/index.css';

function NavBar() {
    const { cartQuantity } = UseShoppingChart();
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleShoppingCart = () => {
        setShowShoppingCart(!showShoppingCart);
    };

    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown)
    }

    const handleClose = (event: MouseEvent) => {
        const targetElement = event.target as HTMLElement;
        if (
            buttonRef.current &&
            targetElement &&
            !(buttonRef.current.contains(targetElement)) &&
            !targetElement.closest('.slideInOut')
        ) {
            setShowShoppingCart(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        }
    }, []);

    return (
        <div>
            <div className='grid grid-cols-3 justify-between items-center bg-[#30abb6] px-24 py-4'>
                <div>
                    <img src={Logo} alt="main-logo" className='w-full md:w-1/2' />
                </div>
                <div className='relative hidden md:block'>
                    <input type="text" placeholder='Search' className='rounded-3xl py-1 pl-4 w-full' />
                    <button className='absolute bg-[#219AEC] text-white rounded-3xl px-6 py-1 right-0 hover:opacity-85 transition duration-300'>
                        Search
                    </button>
                </div>
                <div className='absolute right-24 flex items-center gap-5'>
                <div className='cursor-pointer'>
                  <div className='relative'>
                  <FaRegUser  onClick={toggleUserDropdown} className='text-[#4141F3]'/>
                  {userDropdown && (
                     <div className='absolute top-8 right-0 bg-[#edf1f5] text-dark text-center rounded-md shadow-lg w-[100px] py-2'>
                     <div className='flex flex-col gap-1 font-semibold'>
                         <Link to="/register" onClick={toggleUserDropdown}>Sign Up</Link>
                         <Link to="/" onClick={toggleUserDropdown} >Sign In</Link>
                         <Link to="/" onClick={toggleUserDropdown}>Log Out</Link>
                     </div>
                    </div>
                  )}
                  </div>
                   </div>
                    <div ref={buttonRef}>
                        <button onClick={toggleShoppingCart} className='flex items-center relative bg-[#219AEC] rounded-full p-2'>
                            <FaShoppingCart className='text-[#edeaea]' />
                            {cartQuantity > 0 && (
                                <div className="absolute bg-red-400 rounded-full px-1 ml-3 mt-6 text-xs">
                                    {cartQuantity}
                                </div>
                            )}
                            <div className={`absolute -top-5 -right-24 z-50 ${showShoppingCart ? 'slideInOut' : 'slideOut'}`}>
                                {showShoppingCart && <ShoppingCart />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center bg-[#219AEC] h-16 border-b shadow-sm px-24 z-50">
                <nav className="xs:text-sm sm:text-xl text-white flex gap-8 w-full">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/store">Products</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
