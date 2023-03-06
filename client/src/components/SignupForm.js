import React from "react";

function SignupForm() {

//     const initialData = {
//         name:'',
//         email:'',
//         password: '',
//         bio:'',
//         location:'',
//         age:'',
//         photo: '',
//         activity:'',
//     }

// const [formData, setFormdata] = useState(initialData)

// function handleFormChange(e) {
// const {name, value} = e.target;
// setFormdata({...formData, [name]: value})
// }

// function handleFormSubmit (e) {
// e.preventDefault();

// fetch(), {
// method: 'POST',
// headers: {
//     'Content-Type': 'application/json',
// },
// body: JSON.stringify(formData),
// })
// .then((response) => response.json())
// .then(onMeanieSubmit)

// .then(setFormdata(initialData))
// }

return (

<div class="ui equal width grid">
<div class="column">
    <div>
    <img src="/images/theRules.svg" alt="placeholder" />
    </div>
</div>
<div class="eight wide column">
    <div class="ui segment">
    <form class="ui form">
    <div class="ui one column">
    <div >
        <div class="one field">
            <div class="field">
            <label> Name</label>
            <input value= {formData.name} type="text" name="name" placeholder="Name" required />
            </div>
            <div class="field">
            <label>Email address </label>
            <input value= {formData.email} type="text" name="email" placeholder="Email address"  required />
            </div>
            <div class="field">
            <label>Password </label>
            <input value= {formData.password} type="text" name="password" placeholder="Password"  required />
            </div>
            <div class="field">
            <label>Bio </label>
            <input value= {formData.bio} type="text" name="bio" placeholder="About me" required />
            </div>
            <div class="field">
            <label>Location </label>
            <input value= {formData.location} type="number" name="location" placeholder="location" required  />
            </div>
            <div class="field">
            <label>Age </label>
            <input value= {formData.age} type="number" name="age" placeholder="age" required  />
            </div>
            <div class="field">
            <label>Photo</label>
            <input value= {formData.headshot_photo} type="text" name="photo" placeholder="photo" required  />
            </div>
            <div class="field">
            <label>Activity</label>
            <input value= {formData.activity} type="text" name="activity" placeholder="activity" required  />
            </div>
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

export default SignupForm;