import { useState } from "react"


const SideBar = () => {
    const[isToggleBtnClicked, setIsToggleBtnClicked] = useState(false);

    function toggleButton(){
        setIsToggleBtnClicked(!isToggleBtnClicked);
    }

  return (
    <div>
        {/* for mobile */}
        <button className="flex gap-2 md:hidden items-center border-[1px] border-gray5 text-gray2 px-7 py-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#4F4F4F" d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
            <span>Filters</span>
        </button>
        {/* for tablet and labtop */}
        <div className="hidden md:block">
        {/* Search by property name */}
        <div className="rounded-md bg-lightGray p-5 border-[1px] border-gray5">
            <span className="mb-3 block border-gray5" >Search by property name</span>
            <div className="relative">
                <input type="search" placeholder="eg. Beach westpalm"  className="text-gray2 placeholder:text-gray2 placeholder:font-light outline-none border-[1px] border-gray5 py-2 px-10 w-full rounded-sm"/>
                <svg className="absolute top-3 left-3" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#4F4F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 18L13.875 14.375" stroke="#4F4F4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
        </div>
        <span className="block m-5 text-xl font-bold">Filter by</span>
        {/* filter by budget */}
        <div className="rounded-md bg-lightGray border-[1px] border-gray5">
            <span className="px-5 py-4 block border-b-[1px] border-gray5 ">Your budget per day</span>
            <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">$ 0 - $ 200</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">$ 200 - $ 500</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">$ 500 - $ 1,000</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">$ 1,000 - $ 2,000</label>
                </div>
                <div className="mb-4 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">$ 2,000 - $ 5,000</label>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                    <span className="text-gray2 font-light">Set your own budget</span>
                    <div className="relative" onClick={toggleButton}>
                        <div className={`w-9 h-[20px]  rounded-xl ${isToggleBtnClicked ? 'bg-blue': 'bg-gray4'}`}></div>
                        <div className={`w-[25px] h-[25px] rounded-full bg-white shadow-lg absolute -top-[3px] ${isToggleBtnClicked ? 'right-0': '-left-1'}`}></div>
                    </div>
                </div>
            </div>
        </div>
        {/* filter by rating*/}
        <div className="rounded-md bg-lightGray border-[1px] border-gray5 my-5">
            <span className="px-5 py-4 block border-b-[1px] border-gray5 ">Rating</span>
            <div className="p-5">
            <span className="mb-1 block font-light text-gray2">Show only ratings more than</span>
            <div className="flex w-full border-[1px] border-gray5 rounded-md">
                <div className="flex gap-1 items-center border-r-[1px] border-gray5 py-3 px-2 flex-1">
                    <span>1</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1538)"><path d="M9.00018 12.75L4.59168 15.4425L5.79018 10.4175L1.86768 7.0575L7.01643 6.645L9.00018 1.875L10.9839 6.645L16.1334 7.0575L12.2102 10.4175L13.4087 15.4425L9.00018 12.75Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1538"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                </div> 
                <div className="flex gap-1 items-center border-r-[1px] border-gray5 py-3 px-2 flex-1">
                    <span>2</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1538)"><path d="M9.00018 12.75L4.59168 15.4425L5.79018 10.4175L1.86768 7.0575L7.01643 6.645L9.00018 1.875L10.9839 6.645L16.1334 7.0575L12.2102 10.4175L13.4087 15.4425L9.00018 12.75Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1538"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                </div> 
                <div className="flex gap-1 items-center border-r-[1px] border-gray5 py-3 px-2 flex-1">
                    <span>3</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1538)"><path d="M9.00018 12.75L4.59168 15.4425L5.79018 10.4175L1.86768 7.0575L7.01643 6.645L9.00018 1.875L10.9839 6.645L16.1334 7.0575L12.2102 10.4175L13.4087 15.4425L9.00018 12.75Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1538"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                </div> 
                <div className="flex gap-1 items-center border-r-[1px] border-gray5 py-3 px-2 flex-1">
                    <span>4</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1538)"><path d="M9.00018 12.75L4.59168 15.4425L5.79018 10.4175L1.86768 7.0575L7.01643 6.645L9.00018 1.875L10.9839 6.645L16.1334 7.0575L12.2102 10.4175L13.4087 15.4425L9.00018 12.75Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1538"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                </div> 
                <div className="flex gap-1 items-center border-r-[1px] border-gray5 py-3 px-2 flex-1">
                    <span>5</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1538)"><path d="M9.00018 12.75L4.59168 15.4425L5.79018 10.4175L1.86768 7.0575L7.01643 6.645L9.00018 1.875L10.9839 6.645L16.1334 7.0575L12.2102 10.4175L13.4087 15.4425L9.00018 12.75Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1538"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                </div>          
            </div>
            </div>
        </div>
        {/* popular filters */}
        <div className="rounded-md bg-lightGray border-[1px] border-gray5 my-5">
            <span className="px-5 py-4 block border-b-[1px] border-gray5 ">Popular Filters</span>
            <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Free cancellation</label>
                </div> 
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Spa</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Beach front</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Hot tub/ jacuzzi</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Book without credit card</label>
                </div> 
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">No prepayment</label>
                </div>        
            </div>
        </div>
        {/* Activities */}
        <div className="rounded-md bg-lightGray border-[1px] border-gray5 my-5">
            <span className="px-5 py-4 block border-b-[1px] border-gray5 ">Activities</span>
            <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Fishing</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Hiking</label>
                </div> 
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Beach</label>
                </div> 
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Cycling</label>
                </div> 
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Sauna</label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5 accent-blue" /> <label htmlFor="" className="font-light">Night lights</label>
                </div>          
            </div>
        </div>
        </div>
    </div>
  )
}

export default SideBar
