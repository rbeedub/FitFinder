import React from "react";
import EventCommentForm from "./EventCommentForm";
import AttendanceCard from "./AttendanceCard";

function EventDetailsContainer({ removeFromEvents, user, event_name, date_time, description, participants, location_name,location_zip, host_id, activity, id, host }) {

function deleteEvent(e){
    fetch(`/events/${id}`, {method: "DELETE"})
    .then(() => removeFromEvents(id))
}

return(
<>
{user.id == host.id ? <button class="ui button" onClick={deleteEvent}> Delete Event </button> : null }
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
    <p>Activity:</p>
    <p># of participants: {participants}</p>
</div>
</div>


<div class="ui segment">
    <p>Hosted by:{host_id} </p>
</div>
{user.id == host.id ? <button class="ui button"> Edit Event </button> : null}
</div>
<div class="ui segment">
</div>
<AttendanceCard />
</div>
    <EventCommentForm />
</>
)
}

export default EventDetailsContainer;