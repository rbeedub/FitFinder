import React from "react";
import SearchFilter from "./SearchFilter"
import CreateEvent from "./CreateEvent"
import { NavLink } from "react-router-dom";

function SideMenu() {
return(
<>
    <SearchFilter />
  <div>
   <div> < NavLink to="/all_people"> <button class="ui button"> All People </button> </NavLink></div>
   <br></br>
   <div> < NavLink to="/create_event"> <button class="ui button"> Create Event </button> </NavLink></div>
   </div>
</>
)
}

export default SideMenu;