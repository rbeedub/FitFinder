import React from "react";
import EventMenu from "./EventMenu";
import AttendanceCard from "./AttendanceCard";
import ResponseForm from "./ResponseForm";
import EventDetailsContainer from "./EventDetailsContainer";
import { NavLink } from "react-router-dom"

function EventDetails( {event_name, date_time, description, participants, location_name,location_zip, host_id, activity} ) {
return (

<>
<div class="row">
<div class="three wide column">
< NavLink to="/"> <button class="ui button"> All Events </button> </NavLink>
</div>
<div class="thirteen wide column">
<EventDetailsContainer
    event_name={event_name}
    date_time={date_time}
    description={description}
    participants={participants}
    location_name={location_name}
    location_zip={location_zip}
    host_id={host_id}
    activity={activity}
/>
</div>
</div>
<div class="row">
<div class="three wide column">
</div>
<div class="ten wide column">
    <p></p>
</div>
<div class="three wide column">
    <img/>
</div>
</div>



</>
)
}

export default EventDetails;