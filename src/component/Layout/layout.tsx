import Footer from "../Footer/Footer"
import NavBar from "../Navbar/Navbar"
import { ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}
function layout({children}: ComponentProps) {
  return (
    <div>
        <NavBar/>
        <div className="main-content min-h-screen">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default layout