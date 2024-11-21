import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame 14.png'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className=' p-4 flex items-center justify-between'>
                {/* Logo et nom du site */}
                <div className="flex items-center">
                <Link to="/">
                        <img
                            src={logo}
                            alt="my-dream-place"
                            className="h-5" 
                        />
                    </Link>
                </div>
                <div className={`hidden md:flex items-center space-x-8`}>
                    <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link to="/discover" className="text-gray-600 hover:text-black">Discover</Link>
                    <Link to="/Activites" className="text-gray-600 hover:text-black">Activities</Link>
                    <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                <button className="px-4 py-2 border rounded text-blue border-blue-500 hover:bg-blue-500 hover:text-white">
                
                    Register
                    
                    </button>
                    <button className="px-4 py-2 rounded text-white bg-blue hover:bg-blue-600">
                        Sign In
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-white p-4 flex flex-col space-y-4">
                    <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link to="/discover" className="text-gray-600 hover:text-black">Discover</Link>
                    <Link to="/activites" className="text-gray-600 hover:text-black">Activities</Link>
                    <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;

