import React from 'react'
import Nav from '../../compenants/Nav/Nav'
import MainBanner from '../../compenants/MainBanner/MainBanner'
import Warning from '../../compenants/Warning/Warning'
import Destination from '../../compenants/Destination/Destination'
import NextTrip from '../../compenants/NextTrip/NextTrip'
import Hotels from '../../compenants/Hotels/Hotels'
import LastBanner from '../../compenants/lastBanner/LastBanner'

const Home = () => {
    return (
        <div className='font-serif max-w-[1280px] mx-auto p-8 text-center'> 
            <Nav />
            <MainBanner /> 
            <Warning /> 
            <Destination /> 
            <NextTrip />    
            <Hotels />     
            <LastBanner />
        </div>
    )
}

export default Home
