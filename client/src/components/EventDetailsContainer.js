import React, { useState, useEffect } from "react";
// import EventCommentForm from "./EventCommentForm";
import AttendanceCard from "./AttendanceCard"
import ErrorMsgList from "./ErrorMsgList";
import { useParams, useHistory } from 'react-router-dom'
import EventCommentForm from "./EventCommentForm";

function EventDetailsContainer({ onFormSubmit, removeFromEvents, user, event_name, date_time, description, participants, location_name,location_zip, host_id, activity, host, event }) {


    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const { id } = useParams()
    const [isClicked, setIsClicked] = useState(false)


    // useEffect(()=>{
    //     setFormData({
    //         event_name: event_name,
    //         location_name: location_name,
    //         location_zip: location_zip,
    //         date_time: date_time,
    //         description: description,
    //         participants: participants,
    //         host_id: user.id,
    //         activity_id: 112
    //     })
    // }, [])


    function onFormChange(e){
        const {name, value} = e.target
        const newData = {...formData, [name]: value}
        setFormData(newData)
    }
    console.log('formData', formData)
    console.log('event', event)
function deleteEvent(e){
    fetch(`/events/${id}`, {method: "DELETE"})
    .then(()=> {
        removeFromEvents(id)
        history.push('/')
    })
    // .then(r => {
    //     if (r.ok) {
            
    //         removeFromEvents(id)
            
    //     } else {
    //         removeFromEvents(id)
    //         // r.json().then((err)=>setErrors(err.errors))
    //     }
    // });
    // .then(() => removeFromEvents(id))
}

// console.log('fetching to', `/events/${id}`)

function handleFormSubmit(e){
    e.preventDefault()

    fetch(`/events/${id}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(onFormSubmit)

}

return(
<>
{/* {user.id == host?.id ? <button class="ui right attached pink button" onClick={deleteEvent}> Delete Event </button> : null } */}
{/* <button class="ui button"> Delete Event </button>  */}
<div class="ui segments">
<div class="ui segment">
<h5 class="header">{event_name}</h5>
</div>
<div class="ui segments">
<div class="ui segment">
    <p>Event Details:</p>
    <div class="ui segment">
    <p>Date / Time: {date_time}</p>
    <p>Location: {location_name}</p>
    <br></br>
    <p>Description: {description}</p>
    <p>Activity: {activity?.activity}</p>
    <p># of participants: {participants}</p>
</div>
</div>

<div class="ui segment">
    <p>Hosted by: {host?.name} </p>
</div>
<div class="ui large buttons">
{user.id == host?.id ?
  <button class="ui pink button" onClick={deleteEvent} >Delete</button> : null }
  <div class="or"></div>
  {user.id == host?.id ?
  <button class="ui teal button" onClick={() => {
    setFormData(event)
    setIsClicked(!isClicked)}} >Edit</button>: null}
</div>
{/* {user.id == host?.id ? <button class="ui teal button" onClick={() => {
    setFormData(event)
    setIsClicked(!isClicked)}}> Edit Event </button> : null} */}
{/* {user.id == host?.id ? <button class="ui right attached pink button" onClick={deleteEvent}> Delete Event </button> : null } */}
</div>

<ErrorMsgList errors={errors} />

{ !isClicked ? null : 
<>
    <div class="column">
    </div>
    <div class="eight wide column">
        <div class="ui segment">
            <form class="ui form" onSubmit={handleFormSubmit}>
                <div class="ui one column">
                    <div> 
                        <h1 class="header"> Edit Event </h1>
                        <div class="one field">
                            <div class="field">
                                <label>Event Name</label>
                                <input value={formData.event_name} type="text" name="event_name" onChange={onFormChange} />
                            </div>
                            <div class="field">
                                <label>Date </label>
                                <input value={formData.date_time} type="text" name="date_time" placeholder="date / time" onChange={onFormChange}/>
                            </div>
                            <div class="field">
                                <label>City </label>
                                <input value={formData.location_name} type="text" name="location_name" placeholder="city" onChange={onFormChange}/>
                            </div>
                            <div class="field">
                                <label>Zip Code </label>
                                <input value={formData.location_zip} type="text" name="location_zip" placeholder="zip code" onChange={onFormChange} />
                            </div>
                            <div class="field">
                                <label>Description </label>
                                <input value= {formData.description} type="text" name="description" placeholder="year" onChange={onFormChange}/>
                            </div>
                            <div class="field">
                                <label>Number of Participants</label>
                                <input value={formData.participants} type="number" name="participants" onChange={onFormChange} />
                            </div>
                        </div>
                        <button class="ui teal button" type="submit">Submit</button>
                    </div>
                 </div>
            </form>
        </div>
    <ErrorMsgList errors={errors} />
    </div>
</>
}
<div class="column">
<div>
    </div>
    </div>
    <div class="ui segment">

    </div>
    <AttendanceCard />
    <EventCommentForm />
    </div>


    {/* <EventCommentForm /> */}
</>
)
}

export default EventDetailsContainer;