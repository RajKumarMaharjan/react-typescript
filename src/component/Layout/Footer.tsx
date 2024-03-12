import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='sm:flex justify-between bg-[#1F90F7] py-12 px-24'>
                <div className='md:w-[30%]'>
                    <img src={Logo} alt="logo" className='w-4/6'/>
                    <p className='text-white py-4'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, alias molestias accusantium eos aperiam iure animi sequi rerum voluptate? Reiciendis!
                    </p>
                </div>
                <div className='text-white md:text-center'>
                    <h4 className='text-[24px] font-semibold mb-6'>Information</h4>
                   <div className='flex flex-col gap-3'>
                   <Link to="/home">Home</Link>
                    <Link to="/store">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link> 
                   </div>
                </div>
                <div className='text-white md:text-center mt-8 sm:mt-0'>
                    <h4 className='text-[24px] font-semibold mb-6'>Follow Us</h4>
                    <div className='flex gap-4 '>
                    <FaFacebookF className='text-[#1F90F7] text-2xl bg-white rounded-full w-8 h-8 p-1'/>
                    <FaInstagram className='text-[#1F90F7] text-2xl bg-white rounded-full w-8 h-8 p-1'/>
                    <FaTwitter className='text-[#1F90F7] text-2xl bg-white rounded-full w-8 h-8 p-1'/>
                    <FaLinkedinIn className='text-[#1F90F7] text-2xl bg-white rounded-full w-8 h-8 p-1'/>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Footer