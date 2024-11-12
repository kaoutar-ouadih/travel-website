import React from 'react';
import lock from '../../assets/lock-circle 1.png';

const BookingInfo = () => {
    return (
        <div className="w-full  mt-10 max-w-3xl bg-white shadow-lg rounded-lg ml-0">
            <div className="bg-yellow-500 flex w-3xl mb-6 text-white   p-4 rounded-t-lg">
                
                Important information about your booking
            </div>
            <div className="p-4">
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</li>
                    <li>Stay extensions will require a new reservation.</li>
                    <li>Front desk staff will greet guests on arrival.</li>
                    <li>No refunds will be issued for late check-in or early check-out.</li>
                </ol>
                <p className="text-gray-600 mt-4">
                    By clicking the button below, I acknowledge that I have reviewed the <a href="#" className="text-blue-600 underline">Privacy Statement</a> and have reviewed and accept the <a href="#" className="text-blue-600 underline">Rules and Restrictions</a> and <a href="#" className="text-blue-600 underline">Terms of Use</a>.
                </p>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-blue-700">
                    Complete Booking
                </button>
                <div className="flex items-center justify-center text-gray-500 mt-4">
                    <img src={lock} alt="Secure lock icon" className='mr-2' />
                    We use secure transmission and encrypted storage to protect your personal information
                </div>
            </div>
        </div>
    );
};

export default BookingInfo;

