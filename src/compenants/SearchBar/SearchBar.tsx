import { useState } from "react";

const SearchBar = () => {
    const [CheckInHasValue, setCheckInHasValue] = useState(false);
    const [isCheckInFocused, setIsCheckInFocused] = useState(false);
    const [isCheckInBlured, setIsCheckInBlured] = useState(true);
    const [CheckOutHasValue, setCheckOutHasValue] = useState(false);
    const [isCheckOutFocused, setIsCheckOutFocused] = useState(false);
    const [isCheckOutBlured, setIsCheckOutBlured] = useState(true);

  const handleCheckInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value !== ''){
        setCheckInHasValue(true);
    }else{
        setCheckInHasValue(false);
    }
  };

  const handleCheckInFocus = () => {
    setIsCheckInFocused(true); 
    setIsCheckInBlured(false);
    }

  const handleCheckInBlur = ()=>{
    setIsCheckInFocused(false); 
    setIsCheckInBlured(true);
  }



    const handleCheckOutInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== ''){
            setCheckOutHasValue(true);
        }else{
            setCheckOutHasValue(false);
        }
      };
    
    const handleCheckOutFocus = () => {
        setIsCheckOutFocused(true); 
        }
    
    const handleCheckOutBlur = ()=>{
          setIsCheckOutFocused(false); 
          setIsCheckOutBlured(true);
        }
  
  return (
    <div className="bg-gradient-to-b from-lightBlue to-darkBlue h-[300px] relative flex justify-center">
      <div className="flex gap-5 flex-col md:flex-row items-center w-[300px] sm:w-[400px] md:w-[760px] lg:w-[990px] mb-20 p-3 shadow-lg rounded-lg mx-auto bg-white absolute md:-bottom-[118px]  -bottom-[160px]">
        {/* where are you going */}
        <div className="flex-1 md:flex-3 relative">
          <input type="search" placeholder="Where are you going?" className="bg-lightGray w-full pl-10 px-4 py-3 rounded outline-none text-gray2 placeholder:text-gray2" />
          <svg  className="absolute top-[15px] left-3.5" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9999 11.1917C8.34134 11.1917 8.67943 11.1244 8.99488 10.9938C9.31033 10.8631 9.59695 10.6716 9.83838 10.4302C10.0798 10.1887 10.2713 9.90212 10.402 9.58668C10.5327 9.27123 10.5999 8.93314 10.5999 8.5917C10.5999 8.25026 10.5327 7.91217 10.402 7.59672C10.2713 7.28128 10.0798 6.99465 9.83838 6.75322C9.59695 6.51179 9.31033 6.32027 8.99488 6.18961C8.67943 6.05895 8.34134 5.9917 7.9999 5.9917C7.31034 5.9917 6.64902 6.26563 6.16142 6.75322C5.67383 7.24082 5.3999 7.90214 5.3999 8.5917C5.3999 9.28126 5.67383 9.94258 6.16142 10.4302C6.64902 10.9178 7.31034 11.1917 7.9999 11.1917V11.1917Z" stroke="#828282" strokeWidth="1.5"/><path d="M1.01675 7.07508C2.65842 -0.141583 13.3501 -0.13325 14.9834 7.08342C15.9417 11.3168 13.3084 14.9001 11.0001 17.1168C10.1935 17.8947 9.11654 18.3294 7.99592 18.3294C6.87529 18.3294 5.79835 17.8947 4.99175 17.1168C2.69175 14.9001 0.0584164 11.3084 1.01675 7.07508V7.07508Z" stroke="#828282" strokeWidth="1.5"/></svg>
        </div>
        {/* check in date */}
        <div className="flex-1 relative">
          <input onChange={(e)=>handleCheckInputChange(e)} onFocus={handleCheckInFocus} onBlur={handleCheckInBlur}
                type="date" placeholder="" 
                className={`peer bg-lightGray w-full pl-10 pr-4 py-3 rounded appearance-none outline-none text-gray2 focus:placeholder-hidden ${(CheckInHasValue || isCheckInFocused || !isCheckInBlured) ? '' : 'placeholder-hidden'}`} />
          <label className={`absolute top-3.5 left-10 text-gray2 pointer-events-none peer-focus:opacity-0 ${CheckInHasValue? 'opacity-0': 'opacity-100'}`}> Check in date</label>
          <svg className="absolute top-[15px] left-3.5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.3335 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.9165 8.07507H17.0832" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 7.58329V14.6666C17.5 17.1666 16.25 18.8333 13.3333 18.8333H6.66667C3.75 18.8333 2.5 17.1666 2.5 14.6666V7.58329C2.5 5.08329 3.75 3.41663 6.66667 3.41663H13.3333C16.25 3.41663 17.5 5.08329 17.5 7.58329Z" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 11.9166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 14.4166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 11.9166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 14.4166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 11.9166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 14.4166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {/* check out date */}
        <div className="flex-1 relative">
          <input  onChange={(e)=>handleCheckOutInputChange(e)} onFocus={handleCheckOutFocus} onBlur={handleCheckOutBlur}
                  type="date" placeholder="" 
                  className={`peer bg-lightGray w-full pl-10 pr-4 py-3 rounded appearance-none outline-none text-gray2 focus:placeholder-hidden ${(CheckOutHasValue || isCheckOutFocused || !isCheckOutBlured) ? '' : 'placeholder-hidden'}`} />
                  <label className={`absolute top-3.5 left-10 text-gray2 pointer-events-none peer-focus:opacity-0 ${CheckOutHasValue? 'opacity-0': 'opacity-100'}`}> Check in date</label>
                  <svg className="absolute top-[15px] left-3.5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.3335 2.16663V4.66663" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M2.9165 8.07507H17.0832" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 7.58329V14.6666C17.5 17.1666 16.25 18.8333 13.3333 18.8333H6.66667C3.75 18.8333 2.5 17.1666 2.5 14.6666V7.58329C2.5 5.08329 3.75 3.41663 6.66667 3.41663H13.3333C16.25 3.41663 17.5 5.08329 17.5 7.58329Z" stroke="#828282" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 11.9166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.0791 14.4166H13.0866" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 11.9166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99561 14.4166H10.0039" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 11.9166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.91162 14.4166H6.91995" stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="flex-1 relative">
          <input type="text" placeholder="Guests" className="bg-lightGray w-full pl-11 pr-4 py-3 rounded outline-none text-gray2 placeholder:text-gray2" />
          <svg className="absolute top-[15px] left-3.5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1166 18.0168C14.3833 18.2335 13.5166 18.3335 12.5 18.3335H7.49997C6.4833 18.3335 5.61663 18.2335 4.8833 18.0168C5.06663 15.8502 7.29163 14.1418 9.99997 14.1418C12.7083 14.1418 14.9333 15.8502 15.1166 18.0168V18.0168Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.4998 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008V12.5001C1.6665 15.6501 2.6165 17.3751 4.88317 18.0167C5.0665 15.8501 7.2915 14.1417 9.99984 14.1417C12.7082 14.1417 14.9332 15.8501 15.1165 18.0167C17.3832 17.3751 18.3332 15.6501 18.3332 12.5001V7.50008C18.3332 3.33341 16.6665 1.66675 12.4998 1.66675ZM9.99984 11.8084C8.34984 11.8084 7.0165 10.4667 7.0165 8.81675C7.0165 7.16675 8.34984 5.83341 9.99984 5.83341C11.6498 5.83341 12.9832 7.16675 12.9832 8.81675C12.9832 10.4667 11.6498 11.8084 9.99984 11.8084Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.9833 8.81683C12.9833 10.4668 11.6499 11.8085 9.99993 11.8085C8.34993 11.8085 7.0166 10.4668 7.0166 8.81683C7.0166 7.16683 8.34993 5.8335 9.99993 5.8335C11.6499 5.8335 12.9833 7.16683 12.9833 8.81683Z" stroke="#828282" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <button className="bg-blue tracking-wider text-white rounded-md py-2 px-4 md:w-[80px] lg:w-[130px] h-fit">Search</button>
      </div>
    </div>
    
  )
}

export default SearchBar
