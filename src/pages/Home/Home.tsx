import React from 'react';
import Nav from '../../compenants/Nav/Nav';
import MainBanner from '../../compenants/MainBanner/MainBanner';
import Warning from '../../compenants/Warning/Warning';
import Destination from '../../compenants/Destination/Destination';
import NextTrip from '../../compenants/NextTrip/NextTrip';
import Hotels from '../../compenants/Hotels/Hotels';
import LastBanner from '../../compenants/lastBanner/LastBanner';
import Search from '../../compenants/search/Search';

const Home = () => {
    return (
        <div className="font-serif max-w-[1280px] mx-auto p-8 text-center">
            <Nav />
            <div className="relative">
                <MainBanner />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-95px] w-full max-w-[90%] ">
                    <Search />
                </div>
            </div>
            <div className=' mt-20'>
            <Warning />
            </div>
            
            <Destination />
            <NextTrip />
            <Hotels />
            <LastBanner />
        </div>
    );
};

export default Home;

