import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Frame 14.png';
import notifecation from '../../assets/notification 1.png';
import profilPic from '../../assets/profil.png';
import manageLogo from '../../assets/user-square 2.png';
import tripLogo from '../../assets/bxs-plane-take-off 1.png';
import walletLogo from '../../assets/wallet-3 1.png';
import signoutLogo from '../../assets/logout 1.png';

const AccountNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fermer le menu lorsqu'on clique en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-menu')) {
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
                    <img
                        src={logo}
                        alt="my-dream-place"
                        className="h-5" 
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/news">
                        <img
                            src={notifecation}
                            alt="notification"
                            className="h-6 w-6 cursor-pointer" 
                        />
                    </Link>
                    <div className="relative profile-menu">
                        <img
                            src={profilPic}
                            alt="profile"
                            className="h-10 w-10 rounded-full cursor-pointer"
                            onClick={toggleMenu}
                        />
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="/ManageAccount" className="flex items-center">
                                            <img src={manageLogo} alt="Manage Account" className="h-5 w-5 mr-2" />
                                            Manage account
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="/Trips" className="flex items-center">
                                            <img src={tripLogo} alt="My Trips" className="h-5 w-5 mr-2" />
                                            My trips
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="/RewardWallet" className="flex items-center">
                                            <img src={walletLogo} alt="Reward and Wallet" className="h-5 w-5 mr-2" />
                                            Reward and wallet
                                        </Link>
                                    </li>
                                    <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        <Link to="/" className="flex items-center">
                                            <img src={signoutLogo} alt="Sign Out" className="h-5 w-5 mr-2" />
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
