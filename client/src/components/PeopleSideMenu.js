import React from "react";
import PeopleSearchFilter from "./PeopleSearchFilter";
import { NavLink } from "react-router-dom";
// import FitSideBanner from "../assets/FitSideBanner";
import fitSideBanner from '../assets/FitSideBannerMovie.mp4'



function PeopleSideMenu({ searchCriteria, setSearchCriteria, sortAsc, setSortAsc }) {
return (
<>
<PeopleSearchFilter searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} sortAsc={sortAsc} setSortAsc={setSortAsc}/>

<div>
<video src={fitSideBanner} autoPlay loop={true} /> 
</div>


</>
)
}

export default PeopleSideMenu;