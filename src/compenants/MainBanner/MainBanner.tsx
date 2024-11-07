import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/mainBanner.jpg';

const MainBanner = () => {
    return (
        <div
            className="hero-section relative bg-cover bg-center text-white text-center py-12 px-5 sm:py-16"
            style={{
                backgroundImage: `url(${banner})`,
                height: '570px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                borderRadius: '20px',
            }}
        >
            <div className="hero-content max-w-7xl mx-auto pt-16 sm:pt-20 pb-20 absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-10 sm:mt-20">
                    Enjoy Your Dream Vacation
                </h1>
                <p className="text-base sm:text-lg font-serif">
                    Plan and book your perfect trip with expert advice, travel tips, destination <br className="hidden sm:block" /> information, and inspiration from us.
                </p>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-0 max-w-6xl mt-6 sm:mt-8">
                <div className="search-bar flex flex-col sm:flex-row bg-white h-auto sm:h-[56px] w-full gap-2 justify-center items-center rounded-lg shadow-md p-2">
                    
                    {/* Location Input */}
                    <div className="relative flex-1 w-full sm:w-72">
                        <i className="bx bx-map absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="w-full h-10 sm:h-12 pl-10 pr-4 text-gray-500 rounded-md border bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Check-in Date Input */}
                    <div className="relative flex-1 w-full sm:w-72">
                        <i className="bx bx-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="text"
                            placeholder="Check-in date"
                            className="w-full h-10 sm:h-12 pl-10 pr-4 text-gray-500 rounded-md border bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Check-out Date Input */}
                    <div className="relative flex-1 w-full sm:w-72">
                        <i className="bx bx-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="text"
                            placeholder="Check-out date"
                            className="w-full h-10 sm:h-12 pl-10 pr-4 text-gray-500 rounded-md border bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    {/* Guests Input */}
                    <div className="relative flex-1 w-full sm:w-72">
                        <i className="bx bx-user-pin absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        <input
                            type="number"
                            placeholder="Guests"
                            className="w-full h-10 sm:h-12 pl-10 pr-4 text-gray-500 rounded-md border bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <Link
                        to="/search"
                        className="w-full sm:w-auto px-6 py-3 mt-2 sm:mt-0 rounded-md bg-blue-600 text-white font-semibold text-center"
                    >
                        Search
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;




