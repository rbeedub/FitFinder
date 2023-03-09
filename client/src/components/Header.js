import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom"

function Header( { user, setUser} ) {
return (
<>
< NavLink to="/"><img class="ui fluid image" src="./images/banner.svg" alt="placeholder"/></NavLink>
    <div class="ui secondary pointing menu">
    <a class="item">
    < NavLink to="/">Events</NavLink> 
    </a>
    <a class="item">
    < NavLink to="/all_people"> People </NavLink>
    </a>
    <a class="item">
        < NavLink to="/my-finds"> My Finds </NavLink>
    </a>
    <div class="right menu">
        <a class="ui item active">
        <NavBar
    user={user}
    setUser={setUser}/>
        </a>
    </div>
    </div>

</>
)
}

export default Header;