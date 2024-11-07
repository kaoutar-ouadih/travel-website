import CovidRestrictions from "../components/CovidRestrictions"
import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"
import SideBar from "../components/SideBar"


const SearchPage = () => {
  return (
    <div>
        <SearchBar/>
        <div className="flex flex-col md:flex-row  gap-5 px-12 mt-36 xl:px-24">
            <div className="w-[280px]"> 
                <SideBar/>
            </div>  
            <div className="flex-1">
                <SearchResult/>
            </div>
        </div>
        <CovidRestrictions/>
    </div>
  )
}

export default SearchPage
