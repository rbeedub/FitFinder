import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

function EditProfileForm({ user, setUser }) {

    const [formData, setFormData] = useState(user)
    const [errors, setErrors] = useState([])
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
                    history.push("/")
                })
            } else {
                r.json().then(data => setErrors(data))
            }
        })
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

    return(
        <>
            <div class="ui equal width grid">
                <div class="column">
                    <div class="ui basic segment"></div>
                </div>
            <div class="eight wide column">
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
                    
                                </div>
                                <button class="ui button" type="submit">Submit Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="column">
                <div class="ui basic segment">
                    <button class="ui button" type="submit" onClick={handleDeleteAccount}>Delete Your Profile</button>
                </div>
            </div>
        </div>              
    </>
    )
}

export default EditProfileForm;