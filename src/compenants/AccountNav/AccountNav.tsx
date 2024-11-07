import React from 'react';
import logo from '../../assets/Frame 14.png';
import notifecation from '../../assets/notification 1.png';
import profilPic from '../../assets/profil.png';

const AccountNav = () => {
    return (
        <div className="bg-white shadow-md p-4 w-full">
            <nav className="flex justify-between w-full items-center">
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="my-dream-place"
                        className="h-5" 
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <img
                        src={notifecation}
                        alt="notification"
                        className="h-6 w-6" 
                    />
                    <img
                        src={profilPic}
                        alt="profile"
                        className="h-10 w-10 rounded-full"
                    />
                </div>
            </nav>
        </div>
    );
};

export default AccountNav;


