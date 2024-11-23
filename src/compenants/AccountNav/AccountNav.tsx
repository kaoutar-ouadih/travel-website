import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AccountNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fermer le menu lorsqu'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!event.target || !(event.target instanceof Element) || !event.target.closest('.profile-menu')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className="bg-white shadow-md p-4 w-full relative">
            <nav className="flex justify-between w-full items-center">
                <div className="flex items-center space-x-2">
                    <Link to="/">
                        <img
                            src="./assets/Frame 14.png"
                            alt="my-dream-place"
                            className="h-5" 
                        />
                    </Link>
                    
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="">
                        <img
                            src="./assets/notification 1.png"
                            alt="notification"
                            className="h-6 w-6 cursor-pointer" 
                        />
                    </Link>
                    <div className="relative profile-menu">
                        <img
                            src="./assets/profil.png"
                            alt="profile"
                            className="h-10 w-10 rounded-full cursor-pointer"
                            onClick={toggleMenu}
                        />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="" className="flex items-center">
                                            <img src="./assets/user-square 2.png" alt="Manage Account" className="h-5 w-5 mr-2" />
                                            Manage account
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="" className="flex items-center">
                                            <img src="./assets/bxs-plane-take-off 1.png" alt="My Trips" className="h-5 w-5 mr-2" />
                                            My trips
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="" className="flex items-center">
                                            <img src="./assets/wallet-3 1.png" alt="Reward and Wallet" className="h-5 w-5 mr-2" />
                                            Reward and wallet
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="/" className="flex items-center">
                                            <img src="./assets/logout 1.png" alt="Sign Out" className="h-5 w-5 mr-2" />
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AccountNav;
