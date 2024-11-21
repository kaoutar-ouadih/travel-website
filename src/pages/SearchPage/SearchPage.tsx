import { useEffect, useState } from "react"
import CovidRestrictions from "../../compenants/CovidRestrictions/CovidRestrictions"
import SearchBar from "../../compenants/SearchBar/SearchBar"
import SearchNav from "../../compenants/SearchNav/SearchNav"
import SearchResult from "../../compenants/SearchResult/SearchResult"
import SideBar from "../../compenants/SideBar/SideBar"
import { places } from "../../places"

const SearchPage = () => {
  const[ratingFilter, setRatingFilter] = useState(0);
  const[budgetFilter, setBudgetFilter] = useState('');
  const[placesCopie, setPlacesCopie] = useState(places);

  useEffect(()=>{
    filterByRating();
  }, [ratingFilter])

  useEffect(()=>{
    filterByBudget();
  }, [budgetFilter])

  function filterByRating(){
      const result = places.filter(item=> item.rating >= ratingFilter);
      setPlacesCopie(result);
  }

  function filterByBudget(){
      const ranges = budgetFilter.match(/\$\s*(\d+)/g);
      if (ranges) {
          const [minRange, maxRange] = ranges.map(str => parseInt(str.replace('$', '').trim(), 10));
          const result = places.filter(item => item.currentPrice >= minRange && item.currentPrice <= maxRange);
          setPlacesCopie(result);
      }
  }
  
  return (
    <div>
        <SearchNav/>
        <SearchBar/>
        <div className="flex flex-col md:flex-row  gap-5 px-12 mt-36 xl:px-24">
            <div className="w-[280px]"> 
                <SideBar  setRatingFilter={setRatingFilter} setBudgetFilter={setBudgetFilter} />
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