import React from 'react'
import danger from '../../assets/danger 1.png'

const Warning = () => {
    return (
        <div>
            <div className="container bg-yellow-100 w-full mt-10 h-16 rounded-xl">
                <div className='flex gap-3 p-4 items-center pr-2'>
                    <div className="img-warning">
                        <img src={danger} alt="" />
                    </div>
                    <div className="content text-gray-800 font-serif">
                    Check the latest COVID-19 restrictions before you travel
                    <a href="http://##" className='text-blue-500 font-serif'>.      Learn more</a>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default Warning