import React from "react";
import SideMenu from "./SideMenu";
import EventCommentForm from "./EventCommentForm";
import AttendanceCard from "./AttendanceCard";

function EventDetailsContainer( {event_name, date_time, description, participants, location_name,location_zip, host_id, activity} ) {
return(
<>
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