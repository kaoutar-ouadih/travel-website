import React from 'react';
import flag from '../../assets/flag.png';

const SectionInfo = () => {
    return (
        <div className="w-full h-1/3  mt-8 max-w-3xl bg-white shadow-lg rounded-lg ml-0"> 
            <div className="flex w-3xl mb-4 text-white  bg-blue p-4 rounded-t-lg">
                Room 1 &nbsp;&nbsp; 2 adults, 1 double bed and 1 twin bed, Non-smoking
            </div>
            <div className="p-6 space-y-6">
                <div className="flex space-x-6">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="firstName" className="text-md font-medium text-gray-700">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First name"
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="lastName" className="text-md  font-medium text-gray-700">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="mt-2 p-3 border border-gray-300 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last name"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="mobileNumber" className="text-md font-medium text-gray-700">Mobile number</label>
                    <div className="flex mt-2 gap-3">
                        <div className="relative">
                            <select
                                className="p-3 pl-12 border border-gray-300 rounded-md bg-gray-100 focus:outline-none appearance-none"
                                style={{
                                    backgroundImage: `url(${flag})`,
                                    backgroundSize: '24px 18px',  // Larger flag icon
                                    backgroundPosition: 'left 8px center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <option>+61</option>
                            </select>
                        </div>
                        <input
                            type="tel"
                            id="mobileNumber"
                            className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mobile number"
                        />
                    </div>
                </div>

                {/* Text Alerts Checkbox */}
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        id="textAlerts"
                        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="textAlerts" className="text-md text-gray-700">
                        Receive text alerts about this trip.
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SectionInfo;
