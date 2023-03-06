import React from 'react'

function LogOutButton ({ handleLogOutClick }) {
    return (
        <div>
            <button onClick={handleLogOutClick}>Log Out</button>
        </div>
   )
}

export default LogOutButton;