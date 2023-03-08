import React, { useState } from 'react';


function CreateEvent() {

        const initialData = {
            event_name:'',
            location_city: '',
            location_zip: '',
            date_time: '',
            description:'',
            participants:''
        }

const [formData, setFormdata] = useState(initialData)

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
}

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

    // <div class="ui equal width grid">
    // <div class="column">
    // </div>
    // <div class="eight wide column">
    //     <div class="ui segment">
        <form class="ui form" >
        <div class="ui one column">
        <div> <h1 class="header"> Create Event </h1>
            <div class="one field">
                <div class="field">
                <label>Event Name</label>
                <input value={formData.event_name} type="text" name="event_name" placeholder="Event Name" />
                </div>
                <div class="field">
                <label>Date </label>
                <input value={formData.date_time} type="text" name="date_time" placeholder="date / time" />
                </div>
                <div class="field">
                <label>City </label>
                <input value={formData.location_city} type="text" name="location_city" placeholder="city" />
                </div>
                <div class="field">
                <label>Zip Code </label>
                <input value={formData.location_zip} type="text" name="location_zip" placeholder="zip code" />
                </div>
                <div class="field">
                <label>Description </label>
                <input value= {formData.description} type="text" name="description" placeholder="year"/>
                </div>
                <div class="field">
                <label>Number of Participants</label>
                <input value={formData.participants} type="number" name="participants" placeholder="participants" />
                </div>
            </div>
            <button class="ui button" type="submit">Submit</button>
            </div>
        </div>
    </form>
        /* </div>

    </div>
    <div class="column">
        <div>

        </div>
    </div>
    </div> */

    )
    }

export default CreateEvent;