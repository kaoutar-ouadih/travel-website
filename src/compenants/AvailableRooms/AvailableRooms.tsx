import { useState } from "react";


const AvailableRooms = () => {
    const [CheckInHasValue, setCheckInHasValue] = useState(false);
    const [isCheckInFocused, setIsCheckInFocused] = useState(false);
    const [CheckOutHasValue, setCheckOutHasValue] = useState(false);
    const [isCheckOutFocused, setIsCheckOutFocused] = useState(false);

  const handleCheckInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value){
        setCheckInHasValue(true);
    }else{
        setCheckInHasValue(false);
    }
  };

  const handleCheckInFocus = () => {
    setIsCheckInFocused(true); 
    }

    const handleCheckOutInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){
            setCheckOutHasValue(true);
        }else{
            setCheckOutHasValue(false);
        }
      };
    
      const handleCheckOutFocus = () => {
        setIsCheckOutFocused(true); 
        }


  return (
    <div className="px-12 lg:px-24 py-16">
      <h3 className="text-2xl font-bold block my-8">Available rooms</h3>
      {/* for search */}
        <div className="flex gap-5 flex-col md:flex-row items-center w-full mb-12 p-3 shadow-lg rounded-lg mx-auto bg-white">
            {/* check in date */}
            <div className="flex-1 relative">
            <input onChange={(e)=>handleCheckInputChange(e)} onFocus={handleCheckInFocus}
                    type="date" placeholder="" 
                    className={`peer bg-lightGray w-full pl-10 pr-4 py-3 rounded appearance-none outline-none text-gray2 focus:placeholder-hidden ${(CheckInHasValue || isCheckInFocused) ? '' : 'placeholder-hidden'}`} />
            <label className={`absolute top-3.5 left-10 text-gray2 pointer-events-none peer-focus:opacity-0 ${CheckInHasValue? 'opacity-0': 'opacity-100'}`}> Check in date</label>
            <svg className="absolute top-[15px] left-3.5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.3335 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.9165 8.07507H17.0832" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 7.58329V14.6666C17.5 17.1666 16.25 18.8333 13.3333 18.8333H6.66667C3.75 18.8333 2.5 17.1666 2.5 14.6666V7.58329C2.5 5.08329 3.75 3.41663 6.66667 3.41663H13.3333C16.25 3.41663 17.5 5.08329 17.5 7.58329Z" stroke="#828W2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 11.9166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 14.4166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 11.9166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 14.4166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 11.9166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 14.4166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {/* check out date */}
            <div className="flex-1 relative">
            <input  onChange={(e)=>handleCheckOutInputChange(e)} onFocus={handleCheckOutFocus}
                    type="date" placeholder="" 
                    className={`peer bg-lightGray w-full pl-10 pr-4 py-3 rounded appearance-none outline-none text-gray2 focus:placeholder-hidden ${(CheckOutHasValue || isCheckOutFocused) ? '' : 'placeholder-hidden'}`} />
                    <label className={`absolute top-3.5 left-10 text-gray2 pointer-events-none peer-focus:opacity-0 ${CheckOutHasValue? 'opacity-0': 'opacity-100'}`}> Check in date</label>
                    <svg className="absolute top-[15px] left-3.5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.3335 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.9165 8.07507H17.0832" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 7.58329V14.6666C17.5 17.1666 16.25 18.8333 13.3333 18.8333H6.66667C3.75 18.8333 2.5 17.1666 2.5 14.6666V7.58329C2.5 5.08329 3.75 3.41663 6.66667 3.41663H13.3333C16.25 3.41663 17.5 5.08329 17.5 7.58329Z" stroke="#828W2" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 11.9166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 14.4166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 11.9166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 14.4166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 11.9166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 14.4166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="flex-1 relative">
            <input type="text" placeholder="Guests" className="bg-lightGray w-full pl-11 pr-4 py-3 rounded outline-none text-gray2 placeholder:text-gray2" />
            <svg className="absolute top-[15px] left-3.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <button className="bg-blue tracking-wider text-white rounded-md py-3 px-4 h-fit">Check Availability</button>
      </div>
      <div className="flex gap-5 flex-wrap justify-center md:justify-between">
        <div className="h-[340px] min-w-[375px] bg-gradient-to-b from-lightBlue to bg-darkBlue rounded-md px-8 py-16 relative">
            <div className="flex gap-2 mb-6 items-center">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.414 10.7779C0.5 10.9999 0 12.1919 0 12.1919C0 12.1919 3.398 12.6259 4.949 14.3129C6.5 15.9999 7.071 19.2629 7.071 19.2629C7.071 19.2629 8.47 19.6979 8.485 17.8489C8.5 15.9999 7.778 14.3129 7.778 14.3129L11.091 10.9999L14.701 18.7039C14.701 18.7039 16.08 19.2299 16.04 17.3649C16 15.4999 14.85 7.24194 14.85 7.24194L17.678 4.41294C17.869 4.22845 18.0214 4.00776 18.1262 3.76375C18.231 3.51974 18.2862 3.2573 18.2885 2.99174C18.2908 2.72619 18.2402 2.46283 18.1396 2.21703C18.0391 1.97124 17.8906 1.74794 17.7028 1.56015C17.515 1.37237 17.2917 1.22386 17.0459 1.1233C16.8001 1.02274 16.5368 0.972133 16.2712 0.974441C16.0056 0.976748 15.7432 1.03192 15.4992 1.13674C15.2552 1.24156 15.0345 1.39392 14.85 1.58494L11.947 4.48794C11.947 4.48794 4.148 3.09394 1.824 3.29694C-0.5 3.49994 0.559 4.56294 0.559 4.56294L8.203 8.23294L4.95 11.4859C4.95 11.4859 2.328 10.5559 1.414 10.7779Z" fill="white"/></svg>
                <span className="text-white text-lg tracking-wide">my Dream Place</span>
            </div>
            <p className="text-white text-2xl font-bold w-[200px]">
            20% off <br />Use Promotional Coupon Code: <span className="text-yellow">Orlando</span>
            </p>
            <img className="absolute top-8 right-20" src="./assets/boy-travelling.png" alt="a boy travelling" />
        </div>
        <div className="shadow-md rounded-md w-full sm:flex-1 max-w-[390px] min-w-[300px]" >
            <img src="./assets/available-room-1.png" alt="available room picture" className="w-full" />
            <div className="p-5">
                <span className="font-semibold text-xl block mb-3"> Standard twin ben, Multiple beds</span>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>300 sq ft</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.97493 17.3332C13.5774 17.3332 17.3083 13.6023 17.3083 8.99984C17.3083 4.39734 13.5774 0.666504 8.97493 0.666504C4.37244 0.666504 0.641602 4.39734 0.641602 8.99984C0.641602 13.6023 4.37244 17.3332 8.97493 17.3332V17.3332Z" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12.75C9.99456 12.75 10.9484 12.3549 11.6516 11.6516C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6516 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6516C7.05161 12.3549 8.00544 12.75 9 12.75V12.75Z" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.08301 3.1084L6.03301 6.05006" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.08301 14.8914L6.03301 11.9497" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.8748 14.8914L11.9248 11.9497" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.8748 3.1084L11.9248 6.05006" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Sleeps 3</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>1 double bed and 1 twin bed</span>
                </div>
                <button className="bg-blue tracking-wide text-white rounded-md py-3 px-4 text-sm h-fit w-full mt-5">Reserve suite</button>
            </div>
        </div>
        <div className="shadow-md rounded-md w-full sm:flex-1 max-w-[390px] min-w-[300px]">
            <img src="./assets/available-room-2.png" alt="available room picture" className="w-full" />
            <div className="p-5">
                <span className="font-semibold text-xl block mb-3"> Standard twin ben, Multiple beds</span>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513" stroke="#828282" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>300 sq ft</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.97493 17.3332C13.5774 17.3332 17.3083 13.6023 17.3083 8.99984C17.3083 4.39734 13.5774 0.666504 8.97493 0.666504C4.37244 0.666504 0.641602 4.39734 0.641602 8.99984C0.641602 13.6023 4.37244 17.3332 8.97493 17.3332V17.3332Z" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12.75C9.99456 12.75 10.9484 12.3549 11.6516 11.6516C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6516 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6516C7.05161 12.3549 8.00544 12.75 9 12.75V12.75Z" stroke="#828282" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.08301 3.1084L6.03301 6.05006" stroke="#828W2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.08301 14.8914L6.03301 11.9497" stroke="#828W2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.8748 14.8914L11.9248 11.9497" stroke="#828W2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.8748 3.1084L11.9248 6.05006" stroke="#828W2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Sleeps 3</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#828W2" strokeWidth="1.2" strokeMiterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#828W2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>1 double bed and 1 twin bed</span>
                </div>
                <button className="bg-blue tracking-wide text-white rounded-md py-3 px-4 text-sm h-fit w-full mt-5">Reserve suite</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AvailableRooms
