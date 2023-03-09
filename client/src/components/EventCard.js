import React from "react";
import EventDetails from "./EventDetails";
import { NavLink } from 'react-router-dom';


function EventCard({ event_name, date_time, description, participants, location_name, id, location_zip, host_id, activity }) {


return (
<>
<div class="teal card">
<div class="content">
    <div class = "header">
    <div class="event_name"><h2>{event_name}</h2></div>
    </div>
    <div class="meta">
    </div>
    <br></br>
    <div class="description">
    <h5 class= "ui header">Description:</h5>
    <br></br>
    {description}
    </div>
    <br></br>
    </div>
    <div class="extra content">
    <span class="location"><h5 class= "ui header">
    Location: </h5> {location_name}
    </span>
    <br></br>
    {/* <span class="participants"><h5 class= "ui header">
    # of participants: </h5> {participants}
    </span> */}
    <br></br>
    <span class="date_time"><h5 class= "ui header">
    Date: </h5> {date_time}
    </span>
    <a class="ui teal right ribbon label">{participants} participants</a>
</div>

< NavLink to={`/event_details/${id}`}> <button class="ui button"> Details </button> </NavLink>

</div>
{/* <div>
    <EventDetails
    event_name={event_name}
    date_time={date_time}
    description={description}
    participants={participants}
    location_name={location_name}
    location_zip={location_zip}
    host_id={host_id}
    activity={activity} />
</div> */}
</>
)
}

export default EventCard;