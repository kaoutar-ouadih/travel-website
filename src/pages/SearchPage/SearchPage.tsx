import { useEffect, useState } from "react"
import CovidRestrictions from "../../compenants/CovidRestrictions/CovidRestrictions"
import SearchBar from "../../compenants/SearchBar/SearchBar"
import SearchNav from "../../compenants/SearchNav/SearchNav"
import SearchResult from "../../compenants/SearchResult/SearchResult"
import SideBar from "../../compenants/SideBar/SideBar"
import { places } from "../../places"

const SearchPage = () => {
  const[ratingFilter, setRatingFilter] = useState(0);
  const[placesCopie, setPlacesCopie] = useState(places);

  useEffect(()=>{
    filterByRating();
  }, [ratingFilter])

  function filterByRating(){
      const result = places.filter(item=> item.rating >= ratingFilter);
      setPlacesCopie(result);
  }
  
  return (
    <div>
        <SearchNav/>
        <SearchBar/>
        <div className="flex flex-col md:flex-row  gap-5 px-12 mt-36 xl:px-24">
            <div className="w-[280px]"> 
                <SideBar  setRatingFilter={setRatingFilter}/>
            </div>  
            <div className="flex-1">
                <SearchResult placesCopie={placesCopie}/>
            </div>
        </div>
        <CovidRestrictions/>
    </div>
  )
}

export default SearchPage
