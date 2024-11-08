import React from 'react';

const PriceDetails = () => {
    return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg mt-5 p-4">
            <div className="bg-green p-3 rounded-t-lg ml-0 mr-0 flex w-3xl mb-6 mt-0 text-white">
                <h2 className="text-lg font-semibold">Price Details</h2>
            </div>
            <div className="p-4">
                <div className="flex justify-between text-gray-700">
                <span>1 room X 2 nights</span>
                <span>$120.32</span>
                </div>
                <div className="flex justify-between mt-2 text-gray-700">
                <span>Tax and service fees</span>
                <span>$8.32</span>
                </div>
                <div className="flex justify-between mt-4 font-bold text-lg text-gray-700">
                <span>Total</span>
                <span>$130</span>
                </div>
                <div className="mt-4 text-blue flex items-start">
                <a href="#">Use a coupon, credit or promotional code</a>
                </div>
                <p className='text-gray-700 items-start flex justify-start'>Coupon code</p>
                <div className="mt-4 flex gap-1 items-center justify-center">
                    
                <input
                    type="text"
                    className="w-full p-2 border rounded-lg bg-gray-200 text-black"
                    placeholder=""
                />
                <button
                    className="w-2/4 mt-2  bg-black text-white p-2 rounded-lg"
                >
                    Apply Coupon
                </button>
                </div>
        </div>
    </div>
    );
};

export default PriceDetails;
