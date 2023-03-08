import React from "react";
import LogOutButton from './LogOutButton'

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
<img class="ui fluid image" src="./images/FitFinderBanner.png" alt="placeholder" />

    <LogOutButton handleLogOutClick={handleLogOutClick}/>
</>
)

}

export default NavBar;