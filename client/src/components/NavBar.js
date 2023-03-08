import React from "react";
import LogOutButton from './LogOutButton'
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogOutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }

return (
<>
{/* < NavLink to="/"> <button class="ui button"> All Events </button> </NavLink> */}

< NavLink to="/" ><img class="ui fluid image" src="./images/FitFinderBanner.png" alt="placeholder"/></NavLink>

    <LogOutButton handleLogOutClick={handleLogOutClick}/>
</>
)

}

export default NavBar;