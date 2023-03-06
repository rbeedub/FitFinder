import React from 'react';

function SignIn() {


        const initialData = {
            name:'',
            email:'',
            password: '',
        }

// const [formData, setFormdata] = useState(initialData)

// function handleFormChange(e) {
//     const {name, value} = e.target;
//     setFormdata({...formData, [name]: value})
// }

// function handleFormSubmit (e) {
//     e.preventDefault();

//     fetch('', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//     })
//     .then((response) => response.json())
//     .then(onMeanieSubmit)

//     .then(setFormdata(initialData))
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
        <form class="ui form" >
        <div class="ui one column">
        <div >
            <div class="one field">
                <div class="field">
                <label>Your Name</label>
                <input value= {formData.name} type="text" name="name" placeholder="Name" required />
                </div>
                <div class="field">
                <label>Superlative </label>
                <input value= {formData.superlative} type="text" name="superlative" placeholder="Most likely to..."required />
                </div>
                <div class="field">
                <label>Year </label>
                <input value= {formData.year} type="number" name="year" placeholder="year" required />
                </div>
                <div class="field">
                <label>Headshot Photo</label>
                <input value= {formData.headshot_photo} type="text" name="headshot_photo" placeholder="headshot photo"required  />
                </div>
                <div class="field">
                <label>How many parties have you been to?: </label>
                <input value= {formData.number_of_parties} type="number" name="number_of_parties" placeholder="number_of_parties" required  />
                <br></br>
            </div>

            </div>
            <button class="ui pink button" type="submit">Submit</button>
            </div>
        </div>
    </form>
        </div>
    </div>
    <div class="column">
        <div>
        <img src="/images/rules2.svg" alt="placeholder" />
        </div>
    </div>
    </div>

    )
    }

export default SignIn;