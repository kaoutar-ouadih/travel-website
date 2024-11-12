import lastbanner from  '../../assets/lastBanner.png';


const LastBanner = () => {
    return (
        <div className="main">
            <img
                src={lastbanner} 
                alt="last banner" 
                className='mt-12' />

            <div className="content mt-8">
                <h1 className='font-bold text-center items-center text-gray-800 text-2xl'>Explore the world with My Dream place</h1>    
                <h3 className='font-sans text-blue'>Discover new places and experiences</h3>        
            </div>
        </div>
        
    );
};

export default LastBanner;




