import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail]= useState("");
    const [isSignBtnClicked, setIsSignBtnClicked]= useState(false);
    const [isFormSent, setIsFormSent]= useState(false)
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        setIsSignBtnClicked(true);
        if(emailPattern.test(email)){
            // send data to the backend to send reset link
            // reset the form
            setIsFormSent(true);
            setEmail('');
            setIsSignBtnClicked(false);
        }
    }


  return (
    <div className="px-6 sm:px-16 md:px-24 mb-8">
        <Link to={"/"} className="flex justify-start gap-1 font-bold text-lg py-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/></svg>
            <span>my Dream Place</span>
        </Link>
        {!isFormSent && <div className="flex flex-col justify-center items-center mt-16 mb-44">
            <h1 className="font-bold text-3xl mb-9">Forgot your password?</h1>
            <p className="w-[360px] sm:w-[400px] text-gray2 text-center mb-6">We’ll send you a link to reset it. Enter your email address used for My Dream Place</p>
            <div className="w-[360px] sm:w-[400px]">
                <form onSubmit={(e)=> handleSubmit(e)} noValidate>
                    <label htmlFor="email" className="block font-semibold">Your email address</label>
                    <div className="mt-2 mb-2">
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-12 p-3 bg-lightGray rounded-md" id="email" />
                        {isSignBtnClicked && !emailPattern.test(email) && <span className="text-red text-sm block mt-1">Email format not valid</span>}
                    </div>
                    <button type="submit" className="text-white bg-lightBlue w-full p-3 rounded-md my-7 tracking-wider">Send Reset Link</button>
                </form>
                
                <p className="text-gray2 text-center w-full">By creating an account, you agree with our <Link to={""} className="text-lightBlue">Terms and Conditions</Link> and <Link to={""} className="text-lightBlue">Privacy Statement.</Link></p>
            </div>
        </div>}
        {isFormSent && <div className="flex flex-col justify-center items-center mt-16 mb-44">
            <div className="w-[360px] sm:w-[400px] flex flex-col items-center">
                <img src="./assets/inbox.png" alt="inbox image" />
                <h1 className="font-bold text-3xl mb-9">Check your Inbox</h1>
                <p className="w-[360px] sm:w-[400px] text-gray2 text-center mb-6">We have just emailed you the instrustions and a reset password link to Sumail_john@gmail.com. It might take a few minutes to arrive</p>
                <button onClick={()=> navigate('/sign-in')} className="text-white bg-lightBlue w-full p-3 rounded-md my-7 tracking-wider">Back to Sign in</button>
            </div>
        </div>}
    </div>
  )
}

export default ForgotPassword
