

const AvailableRooms = () => {
  return (
    <div className="px-24 py-16">
      <h3 className="text-2xl font-bold block my-8">Available rooms</h3>
      {/* for search */}
      <div></div>
      <div className="flex gap-5">
        <div className="h-[340px] bg-gradient-to-b from-lightBlue to bg-darkBlue flex-1 rounded-md px-8 py-16 relative">
            <div className="flex gap-2 mb-6 items-center">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.414 10.7779C0.5 10.9999 0 12.1919 0 12.1919C0 12.1919 3.398 12.6259 4.949 14.3129C6.5 15.9999 7.071 19.2629 7.071 19.2629C7.071 19.2629 8.47 19.6979 8.485 17.8489C8.5 15.9999 7.778 14.3129 7.778 14.3129L11.091 10.9999L14.701 18.7039C14.701 18.7039 16.08 19.2299 16.04 17.3649C16 15.4999 14.85 7.24194 14.85 7.24194L17.678 4.41294C17.869 4.22845 18.0214 4.00776 18.1262 3.76375C18.231 3.51974 18.2862 3.2573 18.2885 2.99174C18.2908 2.72619 18.2402 2.46283 18.1396 2.21703C18.0391 1.97124 17.8906 1.74794 17.7028 1.56015C17.515 1.37237 17.2917 1.22386 17.0459 1.1233C16.8001 1.02274 16.5368 0.972133 16.2712 0.974441C16.0056 0.976748 15.7432 1.03192 15.4992 1.13674C15.2552 1.24156 15.0345 1.39392 14.85 1.58494L11.947 4.48794C11.947 4.48794 4.148 3.09394 1.824 3.29694C-0.5 3.49994 0.559 4.56294 0.559 4.56294L8.203 8.23294L4.95 11.4859C4.95 11.4859 2.328 10.5559 1.414 10.7779Z" fill="white"/></svg>
                <span className="text-white text-lg tracking-wide">my Dream Place</span>
            </div>
            <p className="text-white text-2xl font-bold w-[200px]">
            20% off <br />Use Promotional Coupon Code: <span className="text-yellow">Orlando</span>
            </p>
            <img className="absolute top-8 right-20" src="./assets/boy-travelling.png" alt="a boy travelling" />
        </div>
        <div className="shadow-md rounded-md flex-1">
            <img src="./assets/available-room-1.png" alt="available room picture" />
            <div className="p-5">
                <span className="font-semibold text-xl block mb-3"> Standard twin ben, Multiple beds</span>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>300 sq ft</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.97493 17.3332C13.5774 17.3332 17.3083 13.6023 17.3083 8.99984C17.3083 4.39734 13.5774 0.666504 8.97493 0.666504C4.37244 0.666504 0.641602 4.39734 0.641602 8.99984C0.641602 13.6023 4.37244 17.3332 8.97493 17.3332V17.3332Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12.75C9.99456 12.75 10.9484 12.3549 11.6516 11.6516C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6516 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6516C7.05161 12.3549 8.00544 12.75 9 12.75V12.75Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.08301 3.1084L6.03301 6.05006" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.08301 14.8914L6.03301 11.9497" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8748 14.8914L11.9248 11.9497" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8748 3.1084L11.9248 6.05006" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Sleeps 3</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>1 double bed and 1 twin bed</span>
                </div>
                <button className="bg-blue tracking-wide text-white rounded-md py-3 px-4 text-sm h-fit w-full mt-5">Reserve suite</button>
            </div>
        </div>
        <div className="shadow-md rounded-md flex-1">
            <img src="./assets/available-room-2.png" alt="available room picture" />
            <div className="p-5">
                <span className="font-semibold text-xl block mb-3"> Standard twin ben, Multiple beds</span>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 15.8337C10.8839 15.8337 11.7317 15.4825 12.3569 14.8573C12.982 14.2322 13.3332 13.3844 13.3332 12.5003C13.3332 11.6163 12.982 10.7684 12.3569 10.1433C11.7317 9.51818 10.8839 9.16699 9.99984 9.16699C9.11578 9.16699 8.26794 9.51818 7.64281 10.1433C7.01769 10.7684 6.6665 11.6163 6.6665 12.5003C6.6665 13.3844 7.01769 14.2322 7.64281 14.8573C8.26794 15.4825 9.11578 15.8337 9.99984 15.8337V15.8337Z" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.69971 12.5003L9.24137 13.0419C9.39971 13.2003 9.65804 13.2086 9.81637 13.0503L11.2997 11.6836" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.49986 18.3337H12.4999C15.8499 18.3337 16.4499 16.992 16.6249 15.3587L17.2499 10.3587C17.4749 8.32533 16.8915 6.66699 13.3332 6.66699H6.66652C3.10819 6.66699 2.52486 8.32533 2.74986 10.3587L3.37486 15.3587C3.54986 16.992 4.14986 18.3337 7.49986 18.3337Z" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.25 6.3918V5.58346C6.25 3.70846 7.75833 1.8668 9.63333 1.6918C10.1543 1.64061 10.6802 1.69907 11.1773 1.86341C11.6743 2.02775 12.1314 2.29434 12.5192 2.646C12.9069 2.99767 13.2168 3.42663 13.4288 3.90527C13.6408 4.38392 13.7502 4.90164 13.75 5.42513V6.57513" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>300 sq ft</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.97493 17.3332C13.5774 17.3332 17.3083 13.6023 17.3083 8.99984C17.3083 4.39734 13.5774 0.666504 8.97493 0.666504C4.37244 0.666504 0.641602 4.39734 0.641602 8.99984C0.641602 13.6023 4.37244 17.3332 8.97493 17.3332V17.3332Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12.75C9.99456 12.75 10.9484 12.3549 11.6516 11.6516C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6516 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6516C7.05161 12.3549 8.00544 12.75 9 12.75V12.75Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.08301 3.1084L6.03301 6.05006" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.08301 14.8914L6.03301 11.9497" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8748 14.8914L11.9248 11.9497" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8748 3.1084L11.9248 6.05006" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Sleeps 3</span>
                </div>
                <div className="flex gap-2 mb-2 text-gray2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823" stroke="#828282" stroke-width="1.2" stroke-miterlimit="10"/><path d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65007 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65007 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z" stroke="#828282" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
