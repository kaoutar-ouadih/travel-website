import { useState } from "react"
import { Link } from "react-router-dom"


const ProductDetails = () => {
    const [selctedLink, setSelectedLink] = useState("overview");



  return (
    <div className="px-12 lg:px-24 mt-8">
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 h-[452px] w-full md:min-w-[400px]">
                <img src="./assets/product-1-picture1.jpg" alt="product1 picture" className="rounded-md w-full h-full object-cover" />
            </div>
            <div className="w-full flex gap-5  md:w-[400px] md:flex-col">
                    <div>
                        <img src="./assets/product-1-picture2.jpg" alt="product1 picture 2" className="rounded-md w-full h-[218px] object-cover" />
                    </div>
                    <div>
                        <img src="./assets/product-1-picture3.jpg" alt="product1 picture 3" className="rounded-md w-full h-[218px] object-cover" />
                    </div>
            </div>
        </div>
        <div className="flex mt-7">
                    <Link onClick={()=>setSelectedLink("overview")} to={""} className=" inline-block p-3">Overview</Link>
                    <Link onClick={()=>setSelectedLink("rooms")} to={""} className=" inline-block p-3">Rooms</Link>
                    <Link onClick={()=>setSelectedLink("reviews")} to={""} className=" inline-block p-3">Guest Reviews</Link>
        </div>
        <hr />
        {selctedLink ==="overview" && <div className="flex flex-col md:flex-row gap-5 mt-8">
            <div className="flex-1">
                <h2 className="font-bold text-2xl mb-2">Lakeside Motel Warefront</h2>
                <div className="flex gap-3 items-center mb-3">
                    <svg width="82" height="20" viewBox="0 0 82 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1831)"><path d="M10.0002 14.1666L5.10186 17.1583L6.43353 11.5749L2.0752 7.84159L7.79603 7.38325L10.0002 2.08325L12.2044 7.38325L17.926 7.84159L13.5669 11.5749L14.8985 17.1583L10.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip1_4_1831)"><path d="M28.0002 14.1666L23.1019 17.1583L24.4335 11.5749L20.0752 7.84159L25.796 7.38325L28.0002 2.08325L30.2044 7.38325L35.926 7.84159L31.5669 11.5749L32.8985 17.1583L28.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip2_4_1831)"><path d="M46.0002 14.1666L41.1019 17.1583L42.4335 11.5749L38.0752 7.84159L43.796 7.38325L46.0002 2.08325L48.2044 7.38325L53.926 7.84159L49.5669 11.5749L50.8985 17.1583L46.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip3_4_1831)"><path d="M64.0002 14.1666L59.1019 17.1583L60.4335 11.5749L56.0752 7.84159L61.796 7.38325L64.0002 2.08325L66.2044 7.38325L71.926 7.84159L67.5669 11.5749L68.8985 17.1583L64.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip4_4_1831)"><path d="M82.0002 14.1666L77.1019 17.1583L78.4335 11.5749L74.0752 7.84159L79.796 7.38325L82.0002 2.08325L84.2044 7.38325L89.926 7.84159L85.5669 11.5749L86.8985 17.1583L82.0002 14.1666Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1831"><rect width="20" height="20" fill="white"/></clipPath><clipPath id="clip1_4_1831"><rect width="20" height="20" fill="white" transform="translate(18)"/></clipPath><clipPath id="clip2_4_1831"><rect width="20" height="20" fill="white" transform="translate(36)"/></clipPath><clipPath id="clip3_4_1831"><rect width="20" height="20" fill="white" transform="translate(54)"/></clipPath><clipPath id="clip4_4_1831"><rect width="10" height="20" fill="white" transform="translate(72)"/></clipPath></defs></svg>
                    <span className="text-sm font-light">4.5 (1200 Reviews)</span>
                </div>
                <div className="flex gap-2 items-center mb-6">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9999 11.1917C8.34134 11.1917 8.67943 11.1244 8.99488 10.9938C9.31033 10.8631 9.59695 10.6716 9.83838 10.4302C10.0798 10.1887 10.2713 9.90212 10.402 9.58668C10.5327 9.27123 10.5999 8.93314 10.5999 8.5917C10.5999 8.25026 10.5327 7.91217 10.402 7.59672C10.2713 7.28128 10.0798 6.99465 9.83838 6.75322C9.59695 6.51179 9.31033 6.32027 8.99488 6.18961C8.67943 6.05895 8.34134 5.9917 7.9999 5.9917C7.31034 5.9917 6.64902 6.26563 6.16142 6.75322C5.67383 7.24082 5.3999 7.90214 5.3999 8.5917C5.3999 9.28126 5.67383 9.94258 6.16142 10.4302C6.64902 10.9178 7.31034 11.1917 7.9999 11.1917V11.1917Z" stroke="#2F80ED" strokeWidth="1.5"/><path d="M1.01675 7.07484C2.65842 -0.141828 13.3501 -0.133494 14.9834 7.08317C15.9417 11.3165 13.3084 14.8998 11.0001 17.1165C10.1935 17.8945 9.11654 18.3292 7.99592 18.3292C6.87529 18.3292 5.79835 17.8945 4.99175 17.1165C2.69175 14.8998 0.0584164 11.3082 1.01675 7.07484V7.07484Z" stroke="#2F80ED" strokeWidth="1.5"/></svg>
                    <span>Lorem ipsum road, Tantruim-2322, Melbourne, Australia</span>
                </div>
                <div className="shadow-xl rounded-lg">
                    <div className="p-8">
                        <span className="font-semibold text-lg">Overview</span>
                        <p className="my-6 font-light">
                        Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. 
                        Free private parking is available on site. </p>
                        <p  className="my-6 font-light">
                        Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property. 
                        </p>
                        <p className="mt-6 mb-3 font-light">
                        Couples in particular like the location – they rated it 9.2 for a two-person trip.
                        </p>
                    </div>
                    <hr />
                    <div className="p-8 pt-6">
                        <span className="font-semibold text-lg">Top facilities</span>
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-24 mt-4 text-gray2">
                            <div>
                                <div className="flex gap-3 mb-3">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23051 2.58519L2.87801 7.67269C2.16301 8.24102 1.70467 9.44185 1.86051 10.3402L3.07967 17.6369C3.29967 18.9385 4.54634 19.9927 5.86634 19.9927H16.133C17.4438 19.9927 18.6997 18.9294 18.9197 17.6369L20.1388 10.3402C20.2855 9.44185 19.8272 8.24102 19.1213 7.67269L12.7688 2.59435C11.788 1.80602 10.2022 1.80602 9.23051 2.58519V2.58519Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.05664 13.182C10.2208 12.0728 11.7791 12.0728 12.9433 13.182" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.886 11.2387C14.4137 10.7746 13.8687 10.3907 13.2727 10.1021C12.5625 9.75822 11.7838 9.57959 10.9948 9.57959C10.2058 9.57959 9.42699 9.75822 8.71685 10.1021C8.14852 10.3771 7.60768 10.7529 7.10352 11.2387" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.9951 15.5835H11.0035" stroke="#2F80ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <span>Free wifi</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.8335 13.75H16.9585C18.7277 13.75 20.1668 15.1892 20.1668 16.9583C20.1668 18.7275 18.7277 20.1667 16.9585 20.1667C15.1893 20.1667 13.7502 18.7275 13.7502 16.9583V16.5" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.8335 11.0002H16.9585C18.7185 11.0002 20.1668 9.561 20.1668 7.79183C20.1668 6.03183 18.7185 4.5835 16.9585 4.5835C16.1083 4.58591 15.2937 4.92471 14.6925 5.52587C14.0914 6.12702 13.7526 6.94167 13.7502 7.79183V8.25016" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.8335 8.25003H8.53433C9.02203 8.25003 9.49877 8.10541 9.90427 7.83446C10.3098 7.56351 10.6258 7.1784 10.8125 6.72783C10.9991 6.27726 11.0479 5.78146 10.9528 5.30313C10.8576 4.82481 10.6228 4.38544 10.2779 4.04059C9.93308 3.69573 9.49371 3.46089 9.01539 3.36574C8.53706 3.2706 8.04127 3.31943 7.5907 3.50606C7.14012 3.69269 6.75501 4.00875 6.48406 4.41425C6.21311 4.81975 6.0685 5.2965 6.0685 5.78419V6.13253" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <span>Air Conditioning</span>
                                </div>
                                <div className="flex gap-3 mb-3">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2173 2.59424H7.78234C5.49984 2.59424 4.99567 3.73091 4.70234 5.12424L3.6665 10.0834H18.3332L17.2973 5.12424C17.004 3.73091 16.4998 2.59424 14.2173 2.59424V2.59424Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.1575 18.1685C20.2583 19.241 19.3967 20.1668 18.2967 20.1668H16.5733C15.5833 20.1668 15.4458 19.7452 15.2717 19.2227L15.0883 18.6727C14.8317 17.921 14.6667 17.4168 13.3467 17.4168H8.65334C7.33334 17.4168 7.14084 17.9852 6.91167 18.6727L6.72834 19.2227C6.55417 19.7452 6.41667 20.1668 5.42667 20.1668H3.70334C2.60334 20.1668 1.74167 19.241 1.8425 18.1685L2.35584 12.586C2.48417 11.211 2.75 10.0835 5.15167 10.0835H16.8483C19.25 10.0835 19.5158 11.211 19.6442 12.586L20.1575 18.1685Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.66667 7.3335H2.75" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.2502 7.3335H18.3335" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 2.75V4.58333" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.625 4.5835H12.375" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.5 13.75H8.25" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.75 13.75H16.5" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <span>Parking available</span>
                                </div>
                            </div>
                                <div>
                                    <div className="flex gap-3 mb-3">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00016 16.4168C9.97262 16.4168 10.9053 16.0305 11.5929 15.3429C12.2805 14.6553 12.6668 13.7226 12.6668 12.7502C12.6668 11.7777 12.2805 10.8451 11.5929 10.1574C10.9053 9.4698 9.97262 9.0835 9.00016 9.0835C8.0277 9.0835 7.09507 9.4698 6.40744 10.1574C5.7198 10.8451 5.3335 11.7777 5.3335 12.7502C5.3335 13.7226 5.7198 14.6553 6.40744 15.3429C7.09507 16.0305 8.0277 16.4168 9.00016 16.4168V16.4168Z" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.57031 12.7504L8.16615 13.3462C8.34031 13.5204 8.62448 13.5295 8.79865 13.3554L10.4303 11.8521" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.25009 19.1668H11.7501C15.4351 19.1668 16.0951 17.691 16.2876 15.8943L16.9751 10.3943C17.2226 8.15766 16.5809 6.3335 12.6668 6.3335H5.33342C1.41925 6.3335 0.777585 8.15766 1.02509 10.3943L1.71259 15.8943C1.90509 17.691 2.56509 19.1668 6.25009 19.1668Z" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.875 6.03108V5.14191C4.875 3.07941 6.53417 1.05357 8.59667 0.861075C9.16974 0.804771 9.74826 0.869076 10.295 1.04985C10.8417 1.23063 11.3445 1.52387 11.7711 1.9107C12.1976 2.29753 12.5385 2.76939 12.7717 3.2959C13.0048 3.82241 13.1252 4.39191 13.125 4.96774V6.23274" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span>Business Services</span>
                                    </div>
                                    <div className="flex gap-3 mb-3">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.97233 19.1668C15.0351 19.1668 19.139 15.0629 19.139 10.0002C19.139 4.93741 15.0351 0.833496 9.97233 0.833496C4.90958 0.833496 0.805664 4.93741 0.805664 10.0002C0.805664 15.0629 4.90958 19.1668 9.97233 19.1668V19.1668Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14.125C11.094 14.125 12.1432 13.6904 12.9168 12.9168C13.6904 12.1432 14.125 11.094 14.125 10C14.125 8.90598 13.6904 7.85677 12.9168 7.08318C12.1432 6.3096 11.094 5.875 10 5.875C8.90598 5.875 7.85677 6.3096 7.08318 7.08318C6.3096 7.85677 5.875 8.90598 5.875 10C5.875 11.094 6.3096 12.1432 7.08318 12.9168C7.85677 13.6904 8.90598 14.125 10 14.125V14.125Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.49121 3.51953L6.73621 6.75536" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.4917 16.4809L6.7367 13.2451" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.4623 16.4809L13.2173 13.2451" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.4623 3.51953L13.2173 6.75536" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span>Swimming pool</span>
                                    </div>
                                    <div className="flex gap-3 mb-3">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85645 16.8208L9.69811 19.0208C10.0648 19.3874 10.8898 19.5708 11.4398 19.5708H14.9231C16.0231 19.5708 17.2148 18.7458 17.4898 17.6458L19.6898 10.9541C20.1481 9.67076 19.3231 8.57076 17.9481 8.57076H14.2814C13.7314 8.57076 13.2731 8.11243 13.3648 7.47076L13.8231 4.53743C14.0064 3.71243 13.4564 2.79576 12.6314 2.52076C11.8981 2.24576 10.9814 2.61243 10.6148 3.16243L6.85645 8.7541" stroke="#2F80ED" strokeWidth="1.5" strokeMiterlimit="10"/><path d="M2.18164 16.8207V7.83737C2.18164 6.55404 2.73164 6.0957 4.01497 6.0957H4.93164C6.21497 6.0957 6.76497 6.55404 6.76497 7.83737V16.8207C6.76497 18.104 6.21497 18.5624 4.93164 18.5624H4.01497C2.73164 18.5624 2.18164 18.104 2.18164 16.8207Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span>Top rated in area</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[400px]"> 
                    <div>
                        {/* the location on the map */}
                        <iframe className="rounded-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.1490977158196!2d147.97758207464423!3d-37.88019573783565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b25603c3ce52e09%3A0x43dcb144c0dfdd6d!2sLakeside%20Motel%20Waterfront!5e0!3m2!1sfr!2sma!4v1731503681169!5m2!1sfr!2sma"width="400"height="300"style={{ border: 0 }}  loading="lazy"referrerPolicy="no-referrer-when-downgrade"title="Google Map"></iframe>
                    </div>
                    <div>
                        <span className="font-semibold text-lg my-6 block">Explore the area</span>
                        <div className="flex justify-between text-gray2">
                            <div>
                                <div className="flex gap-2 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.84484 11.4817L1.6665 12.66L5.79067 14.4275L7.559 18.5525L8.73734 17.3742L8.14817 14.4275L10.909 11.6667L13.9173 18.0867L15.0332 16.9708L14.0415 8.53499L16.3982 6.17749C16.5574 6.02375 16.6843 5.83984 16.7717 5.6365C16.859 5.43316 16.905 5.21446 16.9069 4.99316C16.9088 4.77186 16.8667 4.5524 16.7829 4.34757C16.6991 4.14274 16.5753 3.95666 16.4188 3.80017C16.2623 3.64368 16.0763 3.51992 15.8714 3.43612C15.6666 3.35232 15.4471 3.31015 15.2258 3.31207C15.0045 3.314 14.7858 3.35998 14.5825 3.44732C14.3792 3.53467 14.1952 3.66164 14.0415 3.82083L11.6223 6.23999L3.1865 5.24749L2.13234 6.30249L8.50234 9.36082L5.7915 12.0717L2.84484 11.4817Z" fill="#4F4F4F"/></svg>
                                    <span>Hotel Penselvenyia</span>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z" fill="#4F4F4F"/></svg>
                                    <span>Travis Bakery store house</span>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z" fill="#4F4F4F"/></svg>
                                    <span>Olivia Johnson Garden</span>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z" fill="#4F4F4F"/></svg>
                                    <span>Norman Opera Circus</span>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99974 1.6665C6.32391 1.6665 3.33308 4.65734 3.33308 8.329C3.30891 13.6998 9.74641 18.1532 9.99974 18.3332C9.99974 18.3332 16.6906 13.6998 16.6664 8.33317C16.6664 4.65734 13.6756 1.6665 9.99974 1.6665ZM9.99974 11.6665C8.15808 11.6665 6.66641 10.1748 6.66641 8.33317C6.66641 6.4915 8.15808 4.99984 9.99974 4.99984C11.8414 4.99984 13.3331 6.4915 13.3331 8.33317C13.3331 10.1748 11.8414 11.6665 9.99974 11.6665Z" fill="#4F4F4F"/></svg>
                                    <span>Rockdeset hotel</span>
                                </div>
                            </div>
                            <div>
                                <span className="block mb-2">2 min drive</span>
                                <span className="block mb-2">10 min drive</span>
                                <span className="block mb-2">15 min drive</span>
                                <span className="block mb-2">18 min drive</span>
                                <span className="block mb-2">32 min drive</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>}
        {selctedLink ==="rooms" && <div className="h-[300px] flex items-center justify-center">Rooms</div>}
        {selctedLink ==="reviews" && <div className="h-[300px] flex items-center justify-center">Reviews</div>}
    </div>
  )
}

export default ProductDetails
