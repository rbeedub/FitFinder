import React from "react";
import EditProfileForm from "./EditProfileForm";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";

function EditProfile({ user, setUser }) {
    return(
        <>

            <h1>user card details render here</h1>
            <MyFindsPeopleContainer />
            <EditProfileForm user={user} setUser={setUser}/>

        </>
    )
}

export default EditProfile;