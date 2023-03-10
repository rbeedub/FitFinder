import React, {useEffect, useState} from "react";
import EditProfileForm from "./EditProfileForm";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";
import UserCard from "./UserCard";

function EditProfile({ user, setUser }) {

    const [activities, setActivities] = useState([])

    useEffect(()=>{
        fetch('/activities')
        .then(r => r.json())
        .then(setActivities)
    }, [])

    return(
        <>
        <div class="ui grid">
    <div class="six wide column">
    <div class="ui teal segment">
    <UserCard 
            user={user}/>
</div>

    </div>
  <div class="ten wide column">  
  <EditProfileForm user={user} setUser={setUser} activities={activities}/>
  </div>
</div>

            {/* <MyFindsPeopleContainer /> */}
            {/* <UserCard 
            user={user}/>
            <EditProfileForm user={user} setUser={setUser} activities={activities}/> */}

        </>
    )
}

export default EditProfile;