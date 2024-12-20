import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const SearchNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="relative bg-transparent z-20 lg:px-24 px-12">
        <nav className='py-4 flex items-center justify-between'>
                {/* Logo et nom du site */}
                <Link to={"/"} className="flex justify-center sm:justify-start gap-1 font-semibold text-lg mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFF" xmlns="http://www.w3.org/2000/svg"><path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#FFF"/></svg>
                    <span className="text-white">my Dream Place</span>
                </Link>
                <div className={`hidden md:flex items-center space-x-8 text-white`}>
                    <Link to="/" className=" hover:text-black">Home</Link>
                    <Link to="/discover" className=" hover:text-black">Discover</Link>
                    <Link to="/about" className=" hover:text-black">About</Link>
                    <Link to="/contact" className=" hover:text-black">Contact</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
                        <i className={`text-white  bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-2xl`}></i>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <button onClick={()=> navigate("/register")} className="px-4 py-2 border rounded text-white border-blue-500 hover:bg-blue-500 hover:text-white">
                        Register
                    </button>
                    <button onClick={()=> navigate("/sign-in")} className="px-4 py-2 rounded text-white bg-blue hover:bg-blue-600">
                            Sign In
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden bg-white p-4 py-8 flex flex-col items-center space-y-6 absolute w-[85%] right-0 left-0 m-auto top-[55px] rounded-sm">
                    <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link to="/discover" className="text-gray-600 hover:text-black">Discover</Link>
                    <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-black">Contact</Link>
                    <button onClick={()=> navigate("/register")} className="px-4 py-2 border w-[90px] rounded text-blue border-blue-500 hover:bg-blue hover:text-white">Register</button>
                    <button onClick={()=> navigate("/sign-in")} className="px-4 py-2 rounded w-[90px] text-white bg-blue hover:bg-white hover:text-blue border border-blue-500">Sign In</button>
                </div>
            )}
      
    </div>
  )
}

export default SearchNav
