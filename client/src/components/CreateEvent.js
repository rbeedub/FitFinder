import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ErrorMsgList from './ErrorMsgList';
import WorkoutVid from '../assets/workoutVid.mp4'
import GroupWorkout from '../assets/GroupWorkout.mp4';

function CreateEvent( { onEventSubmit, user } ) {

        const initialData = {
            event_name:'',
            location_name: '',
            location_zip: '',
            date_time: '',
            description:'',
            participants:'',
            host_id: user.id,
            activity_id: 112
        }

const [formData, setFormData] = useState(initialData)
const [errors, setErrors] = useState([])

function handleFormChange(e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
}

function handleFormSubmit(e) {
    e.preventDefault()

    fetch('/events', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then((r)=> {
        if(r.ok){
            r.json().then(event => {
                onEventSubmit(event)
                setFormData(initialData)
            })
        } else {
            r.json().then(err => setErrors(err.errors))
        }
    })
    // .then(onEventSubmit)
    // .then(setFormData(initialData))
    // .catch(err => setErrors(err.errors))
}



return (
<>

<div class="ui basic segment">
<div class="ui segments">
  <div class="ui segment"> 
  <div> < NavLink to="/all_people"> <button class="ui button"> All People </button> </NavLink></div>
  <div class="ui segments">
    <div class="ui segment">
 
   <div class="ui equal width grid">

 <div class="column">  
  <video src={WorkoutVid} autoPlay loop={true} /> 
 </div>
    <div class="eight wide column">
    <div class="ui segment">
        <form class="ui form" onSubmit={handleFormSubmit}>
        <div class="ui one column">
        <div> <h1 class="header"> Create Event </h1>
            <div class="one field">
                <div class="field">
                <label>Event Name</label>
                <input value={formData.event_name} type="text" name="event_name" placeholder="Event Name" onChange={handleFormChange} />
                </div>
                <div class="field">
                <label>Date </label>
                <input value={formData.date_time} type="text" name="date_time" placeholder="date / time" onChange={handleFormChange}/>
                </div>
                <div class="field">
                <label>City </label>
                <input value={formData.location_name} type="text" name="location_name" placeholder="city" onChange={handleFormChange}/>
                </div>
                <div class="field">
                <label>Zip Code </label>
                <input value={formData.location_zip} type="text" name="location_zip" placeholder="zip code" onChange={handleFormChange} />
                </div>
                <div class="field">
                <label>Description </label>
                <input value= {formData.description} type="text" name="description" placeholder="year" onChange={handleFormChange}/>
                </div>
                <div class="field">
                <label>Number of Participants</label>
                <input value={formData.participants} type="number" name="participants" placeholder="participants" onChange={handleFormChange}/>
                </div>
            </div>
            <button class="ui teal button" type="submit">Submit</button>
            </div>
        </div>
    </form>
    <ErrorMsgList errors={errors} />
    </div>
    </div>
    <div class="column">
    <video src={GroupWorkout} autoPlay loop={true} /> 
        <div>
        </div>
    </div>
    </div> 
    </div>
    </div>
  </div>
  </div>
  </div>

</>
    )
    }

export default CreateEvent;