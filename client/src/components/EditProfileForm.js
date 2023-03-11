import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import ErrorMsgList from "./ErrorMsgList";
import ProfileUpdatedMsg from "./ProfileUpdatedMsg";
import ActivitySelectorForm from "./ActivitySelectorForm";

function EditProfileForm({ user, setUser, activities }) {

    const [formData, setFormData] = useState(user)
    const [errors, setErrors] = useState([])
    const [profileUpdated, setProfileUpdated] = useState(false)
    const [activitySelections, setActivitySelections]=useState(formData?.activities.map(obj=> [obj.id, obj.skill_level, true]))
    let history = useHistory()

    function handleFormSubmit(e){
        e.preventDefault()

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    setUser(data)
                    setProfileUpdated(true)
                    setErrors([])
                    // history.push("/")
                })
            } else {
                r.json().then(err => {
                    setProfileUpdated(false)
                    setErrors(err.errors)
                    setFormData(user)
                })
            }
        })
        .then(handleSubmitActivities)
    }

    function handleDeleteAccount(e){
        fetch(`/users/${user.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setUser(null)
            history.push("/")
        })
    }

    function handleFormChange(e){
        const newData = {...formData, [e.target.name]: e.target.value}
        setFormData(newData)
    }

    const activityLookup = Object.fromEntries(activities.map(obj => [obj.id, obj.activity]))
    console.log("activityLookup", activityLookup)

    function handleSubmitActivities(){
        const viableSelections = activitySelections.filter(arr=> arr.every((elem)=>!!elem))
        // const newActivities = viableSelections.map(arr => {return {id: arr[0], skill_level: arr[1], activity: activityLookup[arr[0]]}}) 
        fetch('/skill_levels', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                activity_ids: viableSelections.map(arr=> arr[0]),
                user_id: user.id,
                skill_levels: viableSelections.map(arr=> arr[1])
            })
        })
        .then(r => {
            if(r.ok){
                r.json().then((res) => {
                    setUser(res)
                    // const newUsers = users.map(userObj => userObj.id === user.id ? res : userObj)
                    // console.log(newUsers) 
                })
            }
        })
    
    }

    return(
        <>
            <ErrorMsgList errors={errors}/>
            {profileUpdated ? <ProfileUpdatedMsg /> : null}
            {/* <div class="ui equal width grid">
                <div class="column">
                    <div class="ui basic segment"></div>
                </div>
    <div class="eight wide column">*/}
                <div class="ui segment"> 
                    <form class="ui form" onSubmit={handleFormSubmit}>
                         <div class="ui one column">
                            <div >
                                <div class="one field">
                                    <div class="field">
                                        <label> Name</label>
                                        <input value= {formData.name} type="text" name="name" placeholder="Name" onChange={handleFormChange}/>
                                    </div>
                                    <div class="field">
                                        <label> Username</label>
                                        <input value= {formData.username} type="text" name="username" placeholder="Username" onChange={handleFormChange}/>
                                    </div>
                                    <div class="field">
                                        <label>Email address </label>
                                        <input value= {formData.email} type="text" name="email" placeholder="Email address" onChange={handleFormChange}/>
                                    </div>
                                    <div class="field">
                                        <label>Bio </label>
                                        <input value= {formData.bio} type="text" name="bio" placeholder="About me" onChange={handleFormChange}/>
                                    </div>
                                    <div class="field">
                                        <label>Zip Code </label>
                                        <input value= {formData.location_zip} type="number" name="location_zip" placeholder="location" onChange={handleFormChange} />
                                    </div>
                                    <div class="field">
                                        <label>City</label>
                                        <input value= {formData.location_name} type="text" name="location_name" placeholder="location" onChange={handleFormChange} />
                                    </div>
                                    <div class="field">
                                        <label>Age </label>
                                        <input value= {formData.age} type="number" name="age" placeholder="age" onChange={handleFormChange}  />
                                    </div>
                                    <div class="field">
                                        <label>Photo</label>
                                        <input value= {formData.photo} type="text" name="photo" placeholder="photo" onChange={handleFormChange}  />
                                    </div>
                                    <ActivitySelectorForm 
                                        activities={activities} 
                                        activitySelections={activitySelections}
                                        setActivitySelections={setActivitySelections}    
                                    />
                    
                                </div>
                                <button class="ui teal button" type="submit">Submit Edit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                {/* </div>
            </div> */}
            <div class="column">
                <div class="ui basic segment">
                    <button class="ui pink button" type="submit" onClick={handleDeleteAccount}>Delete Your Profile</button>
                </div>
            </div>
        {/* </div>               */}
    </>
    )
}

export default EditProfileForm;