import { Link } from "react-router-dom"
import { Place } from "../../Place"

interface SearchResultProps{
  placesCopie : Place[]
}


const SearchResult: React.FC<SearchResultProps> = ({placesCopie}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-2xl font-bold">Melbourne : 2,582 search results found</h1>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:items-center">
        {/* filters */}
        <div className="flex w-full text-xs lg:text-sm border-[1.5px] border-blue rounded-md text-gray2 lg:w-[80%]">
              <div className="border-r-[1.5px] border-blue py-2 px-1 md:px-3 flex-1 min-w-[50px]">
                  <span>Our top picks</span>
              </div> 
              <div className="border-r-[1.5px] border-blue py-2 px-1 md:px-3 flex-2 min-w-[70px]">
                  <span>Hotel and apartments</span>
              </div>
              <div className="border-r-[1.5px] border-blue py-2 px-1 md:px-3 flex-1 min-w-[60px]">
                  <span>Residence</span>
              </div> 
              <div className="border-r-[1.5px] border-blue py-2 px-1 md:px-3 flex-1 min-w-[40px]">
                  <span>Resort</span>
              </div> 
              <div className="py-2 px-3 flex-1 min-w-[60px]">
                  <span>Shared Space</span>
              </div>          
        </div>
        {/* sorting */}
        <div>
          {/* <label htmlFor="sort">Sort by</label> */}
          <select id="sort" name="sort" className="border-2 border-gray5 py-2 pl-2 rounded-md pr-10 outline-none text-gray2">
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      {/* card */}
      { placesCopie.map((item)=>
        <div key={item.id} className="flex flex-col lg:flex-row gap-5 rounded-md border-[1px] border-gray5 p-4 relative">
          <div className="lg:w-[200px] xl:w-[285px] h-[190px]">
            <Link to={`/product-details`}>
              <img src={item.imageUrl} className="rounded-md w-full h-full object-cover" alt="lakeside Motel image" />
            </Link>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-3">{item.name}</h3>
            <div className="flex gap-3 items-center mb-3">
              <svg width="82" height="20" viewBox="0 0 82 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_4_1831)"><path d="M10.0002 14.1666L5.10186 17.1583L6.43353 11.5749L2.0752 7.84159L7.79603 7.38325L10.0002 2.08325L12.2044 7.38325L17.926 7.84159L13.5669 11.5749L14.8985 17.1583L10.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip1_4_1831)"><path d="M28.0002 14.1666L23.1019 17.1583L24.4335 11.5749L20.0752 7.84159L25.796 7.38325L28.0002 2.08325L30.2044 7.38325L35.926 7.84159L31.5669 11.5749L32.8985 17.1583L28.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip2_4_1831)"><path d="M46.0002 14.1666L41.1019 17.1583L42.4335 11.5749L38.0752 7.84159L43.796 7.38325L46.0002 2.08325L48.2044 7.38325L53.926 7.84159L49.5669 11.5749L50.8985 17.1583L46.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip3_4_1831)"><path d="M64.0002 14.1666L59.1019 17.1583L60.4335 11.5749L56.0752 7.84159L61.796 7.38325L64.0002 2.08325L66.2044 7.38325L71.926 7.84159L67.5669 11.5749L68.8985 17.1583L64.0002 14.1666Z" fill="#F2994A"/></g><g clipPath="url(#clip4_4_1831)"><path d="M82.0002 14.1666L77.1019 17.1583L78.4335 11.5749L74.0752 7.84159L79.796 7.38325L82.0002 2.08325L84.2044 7.38325L89.926 7.84159L85.5669 11.5749L86.8985 17.1583L82.0002 14.1666Z" fill="#F2994A"/></g><defs><clipPath id="clip0_4_1831"><rect width="20" height="20" fill="white"/></clipPath><clipPath id="clip1_4_1831"><rect width="20" height="20" fill="white" transform="translate(18)"/></clipPath><clipPath id="clip2_4_1831"><rect width="20" height="20" fill="white" transform="translate(36)"/></clipPath><clipPath id="clip3_4_1831"><rect width="20" height="20" fill="white" transform="translate(54)"/></clipPath><clipPath id="clip4_4_1831"><rect width="10" height="20" fill="white" transform="translate(72)"/></clipPath></defs></svg>
              <span className="text-sm font-light">{item.rating} ({item.reviewsNumber} Reviews)</span>
            </div>
            <span className="text-sm mb-1 block">Live a little and celbrate with champagne</span>
            <div className="flex justify-between mb-1">
              <p className="w-[350px] text-sm font-light">{item.description}</p>
              <span className="text-sm font-light">{item.rooms} room {item.duration}</span>
            </div>
            <div className="flex flex-col-reverse sm:flex-row justify-between sm:items-end">
              <button className="bg-blue tracking-wide text-white rounded-md py-2 px-4 text-sm h-fit mt-3 sm:mt-0">See availability</button>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex gap-2 items-center">
                  {item.oldPrice && <span className="font-bold text-red line-through text-sm">${item.oldPrice}</span>}
                  <span className="font-bold text-lg">${item.currentPrice}</span>
                </div>
                <span className="text-sm font-light">Includes taxes and fees</span>
              </div>
            </div>
          </div>
          {/* for advertising */}
          {item.promotion && <div className="bg-red text-white rounded-md py-1 px-3 h-fit absolute lg:top-4 lg:right-4 top-6 right-6">
                <span className="text-xs">Book now and receive 15% off</span>
          </div>}
          {item.discount && <div className="bg-green text-white rounded-md py-1 px-3 text-sm w-fit mb-2 absolute lg:top-20 top-32 lg:right-4 right-6">5% off</div>}
        </div>)}
     
      <button className="bg-blue bg-opacity-10 tracking-wide text-blue rounded-md py-2 px-4 text-sm h-fit w-fit mx-auto my-10">Load more results</button>

    </div>
  )
}

export default SearchResult