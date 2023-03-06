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

return (<>
    <div>Put the logo here! </div>
    <h1> This is where the navbar goes</h1>
    <p>profile link</p>
    <p>logout link</p>
    <LogOutButton handleLogOutClick={handleLogOutClick}/>
</>)

}

export default NavBar;