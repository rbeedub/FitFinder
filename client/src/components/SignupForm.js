import React, { useState } from "react";

function SignUpForm({ setUser, setErrors }) {
    const initialData = {
        name:'',
        username: '',
        email:'',        
        password:'',
        password_confirmation: '',
        bio:'',
        location_zip:'',
        location_name: '',
        age:'',
        photo: '',
        activity:'',
    }

const [formData, setFormData] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
}

function handleFormSubmit (e) {
    e.preventDefault();

    fetch("/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then(res => {
            if (res.ok){
                res.json().then(user => setUser(user))
            } else {
                res.json().then(errors => setErrors(errors.errors))
            }
        })
        // .then(onMeanieSubmit)
        .then(setFormData(initialData))
}

return (
<div class="ui equal width grid">
<div class="column">
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
            <label>Password </label>
            <input value= {formData.password} type="text" name="password" placeholder="Password" onChange={handleFormChange}/>
            </div>
            <div class="field">
            <label>Password Confirmation </label>
            <input value= {formData.password_confirmation} type="text" name="password_confirmation" placeholder="Confirm Password"  onChange={handleFormChange}/>
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
            <input value= {formData.headshot_photo} type="text" name="photo" placeholder="photo" onChange={handleFormChange}  />
            </div>
            {/* <div class="field">
            <label>Activity</label>
            <input value= {formData.activity} type="text" name="activity" placeholder="activity" onChange={handleFormChange}  />
            </div> */}
        </div>
        <button class="ui button" type="submit">Submit</button>
        </div>
    </div>
</form>
    </div>
</div>
</div>
)
}

export default SignUpForm;