import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ErrorMsgList from './ErrorMsgList';
import WorkoutVid from '../assets/workoutVid.mp4';
import GroupWorkout from '../assets/GroupWorkout.mp4';

function CreateEvent( { onEventSubmit, user } ) {

    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const [activities, setActivities] = useState([])
    const history = useHistory()

    const activityDefault = <option key={0} value={null}>--Select an activity--</option>
    const skillDefault = <option key={0} value={null}>{"--Select a skill level (1=Beginner, 10=Expert) --"}</option>

    const activityOptions = activities?.map(a => {
        return <option key={a.id} value={a.id} name={a.activity}>{a.activity}</option>
    })

    const skillOptions = [1,2,3,4,5,6,7,8,9,10].map(s => {
        return <option key={s} value={s}>{s}</option>
    })


    useEffect(()=>{
        fetch('/activities')
        .then(res => res.json())
        .then(setActivities)
    },[])

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
        body: JSON.stringify({...formData, host_id: user.id}),
        })
        .then((r)=> {
            if(r.ok){
                r.json().then(event => {
                    onEventSubmit(event)
                    setFormData({})
                    // handleSubmitActivity(event.id)
                    history.push(`/event_details/${event.id}`)
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
        // .then(onEventSubmit)
        // .then(setFormData(initialData))
        // .catch(err => setErrors(err.errors))
    }

    // function handleSubmitActivity(event_id){
    //     fetch("/skill_levels",{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             event_id: event_id,
    //             activity_id: Number(formData.activity_id),
    //             skill_level: Number(formData.skill)
    //         })
    //     })
    //     .then(r => {
    //         if(r.ok){
    //             r.json().then((res)=>{
    //             })
    //         }
    //     })
    // }

    return (
 <>
<div class="ui basic segment">
<div class="ui segments">
<div class="ui segment">
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
                                <div> 
                                    <h1 class="header"> Create Event </h1>
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
                                        <div class="field">
                                            <label>Image </label>
                                            <input value= {formData.image} type="text" name="image" placeholder="image" onChange={handleFormChange}/>
                                        </div>
                                        <div class="field">
                                            


                                            <label>Activity</label>
                                            <select name="activity_id" value={formData.activity} onChange={handleFormChange}> 
                                                {activityDefault}
                                                {activityOptions}
                                            </select>
                                            <select name="skill_level" value={formData.skill_level} onChange={handleFormChange}>
                                                {skillDefault}
                                                {skillOptions}
                                            </select>
                                            {/* <select name="activity_id" onChange={handleFormChange}>
                                                <option value="null">(Select an activity)</option>
                                                {activities?.map(a => {
                                                        return (
                                                            <option key={a.id} value={a.id}>
                                                                {a.activity}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select> */}
                                        </div>
                                    </div>
                                    <button class="ui pink button" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                        <ErrorMsgList errors={errors} />
                    </div>
                </div>
                <div class="column">
                 
                    <video src={GroupWorkout} autoPlay loop={true} />
          
                </div>

            </div>
            {/* <button class="ui teal button" type="submit">Submit</button> */}
            </div>
        </div>
    {/* </form> */}

    </div>
    </div>
    <div class="column">
    {/* <video src={GroupWorkout} autoPlay loop={true} />  */}
    </div>
    </div> 

</>

    )
}

export default CreateEvent;