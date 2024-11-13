import React from 'react';

import destinations from '../../assets/destination';

const Destination = () => {
    return (
        <div className="main">
            <div className="content relative items-start mr-0 text-left mb-4 mt-10">
                <h1 className="font-bold text-left text-2xl">Enjoy your dream vacation</h1>
                <p className='text-gray-600'>
                    Plan and book your perfect trip with expert advice, travel tips, destination information, <br />
                    and inspiration from us
                </p>
            </div>
            <div className="destinations flex gap-4 justify-between">
                {destinations.map((destination) => (
                    <div key={destination.id} className="item text-center mt-3 rounded-md">
                        <img 
                            src={destination.image} 
                            alt={destination.name} 
                            className="item-image" 
                            style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '20px' }} 
                        />
                        <p className="font-bold mt-2">{destination.name}</p>
                        <p>{destination.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;


