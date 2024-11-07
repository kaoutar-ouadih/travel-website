import React from 'react';
import hotels from '../../assets/hotels';

const Hotels = () => {
    return (
        <div>
            <div className="title mt-10 font-bold text-left mb-3 w-full text-gray-800 text-2xl">
                <h1 className="font-serif text-gray-800 text-2xl">Popular Hotels</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="item">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="item-image w-full h-60 object-cover rounded-lg"
                        />
                        <p className="font-bold mt-2">{hotel.name}</p>
                        <p className="text-gray-600">{hotel.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hotels;


