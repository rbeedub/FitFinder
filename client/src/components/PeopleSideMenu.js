import React from "react";
import PeopleSearchFilter from "./PeopleSearchFilter";
import { NavLink } from "react-router-dom";

function PeopleSideMenu() {
return (
<>

<NavLink to="/"> <button class="ui button"> All Events </button> </NavLink>

<PeopleSearchFilter/>
<h1>People Search and Filter go here</h1>




</>
)
}

export default PeopleSideMenu;