import React from "react";
import EditProfileForm from "./EditProfileForm";
import FitFriendDetails from "./FitFriendDetails";

function EditProfile({ user, setUser }) {
    return(
        <>

            <h1>user card details render here</h1>
            <FitFriendDetails />
            <EditProfileForm user={user} setUser={setUser}/>

        </>
    )
}

export default EditProfile;