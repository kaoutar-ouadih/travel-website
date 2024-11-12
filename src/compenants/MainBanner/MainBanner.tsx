
import banner from '../../assets/mainBanner.jpg';

const MainBanner = () => {
    
    return (
        <div
            className="hero-section relative bg-cover bg-center text-white text-center py-12 px-5 sm:py-16"
            style={{
                backgroundImage: `url(${banner})`,
                height: '570px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                borderRadius: '20px',
            }}
        >
            <div className="hero-content max-w-7xl mx-auto pt-16 sm:pt-20 pb-20 absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-10 sm:mt-20">
                    Enjoy Your Dream Vacation
                </h1>
                <p className="text-base sm:text-lg font-serif">
                    Plan and book your perfect trip with expert advice, travel tips, destination <br className="hidden sm:block" /> information, and inspiration from us.
                </p>
            </div>
            </div>
    );
};

export default MainBanner;




