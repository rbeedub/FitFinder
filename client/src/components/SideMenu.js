import React from "react";
import SearchFilter from "./SearchFilter"
import CreateEvent from "./CreateEvent"
import { NavLink } from "react-router-dom";

function SideMenu() {
return(
<>
    <SearchFilter />
    < NavLink to="/all_people"> <button class="ui button"> All People </button> </NavLink>
    <CreateEvent />
    
</>
)
}

export default SideMenu;