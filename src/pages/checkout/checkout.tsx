import React from 'react';
import AccountNav from '../../compenants/AccountNav/AccountNav';
import Warning from '../../compenants/Warning/Warning';
import SectionInfo from '../../compenants/SectionInfo/SectionInfo';
import PaymentOptions from '../../compenants/PaymentOptions/PayementOptions';
import BookingInfo from '../../compenants/BookingInfo/BookingInfo';
import ProductInfo from '../../compenants/ProductInfo/ProductInfo';
import PriceDetails from '../../compenants/PriceDetails/PriceDetails';

const Checkout = () => {
    return (
        <div>
            <AccountNav />
            <div className='max-w-[1280px] mx-auto p-8 text-center'>
            
            <h1 className='text-4xl font-semibold flex items-start text-gray-900 mt-12'>Secure your reservation</h1>          
            <Warning />
            <div className="flex flex-col md:flex-row mt-8">
                <div className="flex flex-col w-full md:w-2/3 mr-8 mb-8 md:mb-0">
                    <SectionInfo />
                    <PaymentOptions />
                    <BookingInfo />
                </div>
                <div className="flex flex-col w-full md:w-1/3 md:items-center">
                    <ProductInfo />
                    <PriceDetails />
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default Checkout;



