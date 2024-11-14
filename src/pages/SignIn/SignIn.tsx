import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"


const SignIn = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [isSignBtnClicked, setIsSignBtnClicked]= useState(false);
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        setIsSignBtnClicked(true);
        if(emailPattern.test(email) && password.length>=8){
            // send data to the backend for authentication
            // reset the form
            setEmail('');
            setPassword('');
            setIsSignBtnClicked(false);
        }
    }

  return (
    <div className="px-6 sm:px-16 md:px-24 mb-8">
        <div className="flex justify-start gap-1 font-bold text-lg py-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/></svg>
            <span>my Dream Place</span>
        </div>
        <div className="flex flex-col justify-center items-center mt-16 mb-44">
            <h1 className="font-bold text-3xl mb-9">Sign in</h1>
            <div className="w-[360px] sm:w-[400px]">
                <form onSubmit={(e)=> handleSubmit(e)} noValidate>
                    <label htmlFor="email" className="block font-semibold">Email address</label>
                    <div className="mt-2 mb-5">
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-12 p-3 bg-lightGray rounded-md" id="email" />
                        {isSignBtnClicked && !emailPattern.test(email) && <span className="text-red text-sm block mt-1">Email format not valid</span>}
                    </div>
                    <label htmlFor="password" className="block font-semibold">Password</label>
                    <div className=" mt-2 mb-5">
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full h-12 p-3 bg-lightGray rounded-md" id="password" />
                        {isSignBtnClicked && (password.length<8) && <span className="text-red text-sm block mt-1">Min length 8</span>}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="keep-me-signed-in" className="w-5 h-5" />
                            <label htmlFor="keep-me-signed-in" className="text-gray2">Keep me signed in</label>
                        </div>
                        <Link to={""} className=" text-lightBlue">Forgot password?</Link>
                    </div>
                    <button type="submit" className="text-white bg-lightBlue w-full p-3 rounded-md my-7 tracking-wider">Login</button>
                </form>
                <div className="flex items-center gap-3">
                    <hr className="flex-1 h-[1.8px] bg-gray5 border-none" />
                    <span className="flex-2 text-gray2">or use one of these options</span>
                    <hr className="flex-1 h-[1.8px] bg-gray5 border-none" />
                </div>
                <button className="w-full p-3 rounded-md mt-7 mb-5 tracking-wider flex gap-2 border border-gray5 justify-center items-center">
                    <img src="./assets/google-icon.png" alt="google logo" />
                    <span>Continue with Google</span>
                </button>
                <button className="w-full p-3 rounded-md mb-9 tracking-wider flex gap-2 justify-center items-center bg-facebookColor">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_964)"><path d="M17.8048 0H3.19504C1.70664 0 0.5 1.20659 0.5 2.69504V17.3049C0.5 18.7933 1.70659 19.9999 3.19504 19.9999H10.4005L10.4128 12.853H8.55602C8.31472 12.853 8.11887 12.6579 8.11794 12.4166L8.10904 10.1129C8.10811 9.87025 8.30454 9.67308 8.54716 9.67308H10.4005V7.44709C10.4005 4.86384 11.9782 3.45724 14.2827 3.45724H16.1736C16.4155 3.45724 16.6117 3.65339 16.6117 3.89537V5.83789C16.6117 6.07978 16.4157 6.27587 16.1739 6.27602L15.0134 6.27655C13.7602 6.27655 13.5175 6.87207 13.5175 7.74602V9.67313H16.2713C16.5337 9.67313 16.7372 9.90225 16.7063 10.1628L16.4333 12.4666C16.4071 12.687 16.2202 12.8531 15.9982 12.8531H13.5298L13.5175 20H17.8049C19.2933 20 20.4999 18.7934 20.4999 17.305V2.69504C20.4998 1.20659 19.2932 0 17.8048 0Z" fill="white"/></g><defs><clipPath id="clip0_4_964"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                    <span className="text-white">Continue with Facebook</span>
                </button>
                <span className="text-gray2 text-center w-full block">Don’t have an account? <Link to={""} className="text-lightBlue">Register</Link></span>
            </div>
        </div>
    </div>
  )
}

export default SignIn
