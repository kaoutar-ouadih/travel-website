import React from 'react'
import AccountNav from '../../compenants/AccountNav/AccountNav'
import Warning from '../../compenants/Warning/Warning'
import SectionInfo from '../../compenants/SectionInfo/SectionInfo'


const checkout = () => {
    return (
        <div className=''>
            <AccountNav />  
            <h1 className=' text-4xl font-semibold flex items-start text-gray-900 mt-12'>Secure your reservation</h1>          
            <Warning />
            <SectionInfo />
        </div>
    )
}

export default checkout
