import  { useState } from 'react';

const PaymentOptions = () => {
    const [selectedOption, setSelectedOption] = useState('card');

    return (
        <div className="w-full  mt-10 max-w-3xl p-3 bg-white shadow-lg rounded-lg ml-0">
            <div className="flex w-3xl mb-6 text-white  bg-blue p-4 rounded-t-lg">
                <img src="./assets/card-tick 1.png" alt="card-tick" className="w-8 h-8 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Payment Options</h2>
            </div>
            <div className="flex border-b mb-6">
                <button 
                    onClick={() => setSelectedOption('card')} 
                    className={`flex-1 py-2 text-center ${selectedOption === 'card' ? 'border-b-2  border-blue-600 text-blue-600' : 'text-gray-500'}`}
                >
                    Debit/Credit Card
                </button>
                <button 
                    onClick={() => setSelectedOption('paypal')} 
                    className={`flex-1 py-2 text-center ${selectedOption === 'paypal' ? 'border-b-2 border-blue-600  text-blue-600' : 'text-gray-500'}`}
                >
                    PayPal
                </button>
                <button 
                    onClick={() => setSelectedOption('bank')} 
                    className={`flex-1 py-2 text-center ${selectedOption === 'bank' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                >
                    Bank Transfer
                </button>
            </div>

            {selectedOption === 'card' && (
                <div>
                    <div className="flex justify-start space-x-4 mb-4">
                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" className="w-10" />
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-10" />
                        <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-10" />
                        <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="w-10" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-serif text-start mb-5 text-gray-700">Name on card</label>
                        <input type="text" className="w-full px-4 py-2 border-gray-300 bg-gray-100 border rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-serif text-start mb-5">Debit/Credit card number</label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 pr-2">
                            <label className="block text-gray-700 font-serif text-start mb-5">Expiration Date</label>
                            <div className="flex space-x-2">
                                <select className="w-1/2 px-4 py-2 border rounded-md font-serif border-gray-300 bg-gray-100 text-gray-800 text-start mb-5 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                    <option>Month</option>
                                    <option>01</option>
                                    <option>02</option>
                                    {/* Add other months */}
                                </select>
                                <select className="w-1/2 px-4 py-2 border text-gray-800 border-gray-300 bg-gray-100 font-serif text-start mb-5 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                    <option>Year</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    {/* Add other years */}
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block text-gray-700 font-serif text-start mb-5">Security Code</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-serif text-start mb-5">Billing Zip code</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md border-gray-300 bg-gray-100 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    </div>
                </div>
            )}

            {selectedOption === 'paypal' && (
                <div className="text-center text-gray-700">
                    <p className="mb-4">You will be redirected to PayPal to complete your payment securely.</p>
                    <button className="px-6 py-2 bg-yellow-400 text-white rounded-md shadow hover:bg-yellow-500">
                        Continue to PayPal
                    </button>
                </div>
            )}

            {selectedOption === 'bank' && (
                <div className="text-gray-700">
                    <p className="mb-4">Please transfer your payment to the following bank account details:</p>
                    <p className="mb-2"><strong>Account Number:</strong> 123456789</p>
                    <p className="mb-2"><strong>Bank Name:</strong> XYZ Bank</p>
                    <p className="mb-2"><strong>IBAN:</strong> XX00 1234 5678 9012 3456 78</p>
                    <p className="mb-4"><strong>SWIFT Code:</strong> XYZB1234</p>
                </div>
            )}
        </div>
    );
};

export default PaymentOptions;
