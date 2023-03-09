import React, {useEffect, useState} from "react";
import EditProfileForm from "./EditProfileForm";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";

function EditProfile({ user, setUser }) {

    const [activities, setActivities] = useState([])

    useEffect(()=>{
        fetch('/activities')
        .then(r => r.json())
        .then(setActivities)
    }, [])

    return(
        <>

            <h1>user card details render here</h1>
            {/* <MyFindsPeopleContainer /> */}
            <EditProfileForm user={user} setUser={setUser} activities={activities}/>

        </>
    )
}

export default EditProfile;