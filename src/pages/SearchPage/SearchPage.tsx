import CovidRestrictions from "../../compenants/CovidRestrictions/CovidRestrictions"
import SearchBar from "../../compenants/SearchBar/SearchBar"
import SearchNav from "../../compenants/SearchNav/SearchNav"
import SearchResult from "../../compenants/SearchResult/SearchResult"
import SideBar from "../../compenants/SideBar/SideBar"


const SearchPage = () => {
  return (
    <div>
        <SearchNav/>
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
