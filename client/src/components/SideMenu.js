import React from "react";
import SearchFilter from "./SearchFilter"
import CreateEvent from "./CreateEvent"
import { NavLink } from "react-router-dom";

function SideMenu() {
return(
<>
  <SearchFilter />
  <div>
    {/* <img src="./images/FitSideBanner.svg"/>
  <p>Is there an event you want to create?</p> */}
  <div>< NavLink to="/create_event"> <button class="ui button"> <img src="./images/FitSideBanner.svg"/></button> </NavLink></div>
    </div>

</>
)
}

export default SideMenu;