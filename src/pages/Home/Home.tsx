import Nav from '../../compenants/Nav/Nav';
import MainBanner from '../../compenants/MainBanner/MainBanner';
import Destination from '../../compenants/Destination/Destination';
import NextTrip from '../../compenants/NextTrip/NextTrip';
import Hotels from '../../compenants/Hotels/Hotels';
import LastBanner from '../../compenants/lastBanner/LastBanner';
import Search from '../../compenants/search/Search';
import CovidRestrictions from '../../compenants/CovidRestrictions/CovidRestrictions';

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="relative mx-12 md:mx-24 text-center">
                <MainBanner />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-95px] w-full max-w-[90%] ">
                    <Search />
                </div>
            </div>
            <div className='mt-20'>
                <CovidRestrictions/>
            </div>
            
            <Destination />
            <NextTrip />
            <Hotels />
            <LastBanner />
        </div>
    );
};

export default Home;

