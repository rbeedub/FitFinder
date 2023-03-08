import React from 'react'

function LogOutButton ({ handleLogOutClick }) {
    return (
        <div>
            <button class="ui basic button" onClick={handleLogOutClick} > Log Out </button>
        </div>
   )
}

export default LogOutButton;