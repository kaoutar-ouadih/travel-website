
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>
        {/* for different links */}
        <div className="flex justify-center sm:justify-start mb-16 mt-9 px-12 lg:px-24 gap-10 flex-wrap">
            <div className="flex-1 min-w-[200px] max-w-[300px] text-center sm:text-left">
                <div className="flex justify-center sm:justify-start gap-1 font-bold text-lg mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/></svg>
                    <span>my Dream Place</span>
                </div>
                <p className="font-light ml-[26px]">Your next goto companion for travel</p>
            </div>
            <div className="basis-[200px] text-center sm:text-left">
                <h4 className="font-bold text-lg mb-3">Company</h4>
                <ul className="font-light">
                    <li className="mb-1"><Link to={""}>About</Link></li>
                    <li className="mb-1"><Link to={""}>Jobs</Link></li>
                    <li className="mb-1"><Link to={""}>Newsroom</Link></li>
                    <li className="mb-1"><Link to={""}>Advertising</Link></li>
                    <li className="mb-1"><Link to={""}>Contact us</Link></li>
                </ul>
            </div>
            <div className="basis-[200px] text-center sm:text-left">
                <h4 className="font-bold text-lg mb-3">Explore</h4>
                <ul className="font-light">
                    <li className="mb-1"><Link to={""} >Australia</Link></li>
                    <li className="mb-1"><Link to={""}>New Zealand</Link></li>
                    <li className="mb-1"><Link to={""}>United States America (USA)</Link></li>
                    <li className="mb-1"><Link to={""}>Greece</Link></li>
                    <li className="mb-1"><Link to={""}>Maldives</Link></li>
                    <li className="mb-1"><Link to={""}>Singapore</Link></li>
                    <li className="mb-1"><Link to={""}>See more</Link></li>
                </ul>
            </div>
            <div className="basis-[200px] text-center sm:text-left">
                <h4 className="font-bold text-lg mb-3">Terms and Policies</h4>
                <ul className="font-light">
                    <li className="mb-1"><Link to={""}>Privacy Policy</Link></li>
                    <li className="mb-1"><Link to={""}>Terms of use</Link></li>
                    <li className="mb-1"><Link to={""}>Acessibility</Link></li>
                    <li className="mb-1"><Link to={""}>Reward system policy</Link></li>
                </ul>
            </div>
            <div className="basis-[200px] text-center sm:text-left">
                <h4 className="font-bold text-lg mb-3">Help</h4>
                <ul className="font-light">
                    <li className="mb-1"><Link to={""}>Support</Link></li>
                    <li className="mb-1"><Link to={""}>Cancel your bookings</Link></li>
                    <li className="mb-1"><Link to={""}>Use Coupon</Link></li>
                    <li className="mb-1"><Link to={""}>Refund Policies</Link></li>
                    <li className="mb-1"><Link to={""}>International Travel Documents</Link></li>
                </ul>
            </div>
        </div>
        {/* for copyright */}
        <div className="flex justify-end px-24 py-6 bg-opacity-90 bg-veryLightGray">
            <span className="text-gray2">&copy; my Dream Place 2024</span>
        </div>
    </div>
  )
}

export default Footer
