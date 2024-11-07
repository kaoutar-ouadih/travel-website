import React from 'react';
import destinations from '../../assets/destination';

const Destination = () => {
    return (
        <div className="main">
            <div className="content relative items-start mr-0 text-left mb-4 mt-10">
                <h1 className="font-bold text-left text-2xl">Enjoy your dream vacation</h1>
                <p className='text-gray-600'>Plan and book your perfect trip with expert advice, travel tips, destination information, <br /> and inspiration from us</p>
            </div>
            <div className="destinations flex gap-4 justify-between">
                {destinations.map((e) => (
                    <div key={e.id} className="item text-center mt-3 rounded-md">
                        <img src={e.image} alt={e.name} className="item-image" style={{ width: '300px', height: '200px', objectFit: 'cover' ,borderRadius:'20px'}} />
                        <p className="font-bold mt-2">{e.name}</p>
                        <p>{e.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Destination;


