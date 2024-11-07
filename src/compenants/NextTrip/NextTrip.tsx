import React from 'react';
import trips from '../../assets/trips.js';

const NextTrip = () => {
    return (
        <div>
            <div className="title mt-10 font-bold text-left mb-3 w-full text-gray-800 text-2xl">
                <h1>Get inspiration for your next trip</h1>
            </div>
            <div className="trips grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {trips.map((e) => (
                    <div 
                        key={e.id} 
                        className="relative item text-center mt-6 rounded-md overflow-hidden mx-auto" 
                        style={{ width: '100%', maxWidth: '500px', height: '300px' }}
                    >
                        <img 
                            src={e.image} 
                            alt={e.title} 
                            className="w-full h-full object-cover rounded-md transform transition duration-300 ease-in-out hover:scale-110" 
                            style={{ borderRadius: '10px' }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-50 p-4 rounded-md text-white">
                            <p className="font-bold">{e.title}</p>
                            <p>{e.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextTrip;




