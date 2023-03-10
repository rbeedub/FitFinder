import React from "react";
import EventDetails from "./EventDetails";
import { NavLink } from 'react-router-dom';


function EventCard({ event_name, date_time, description, participants, location_name, id, location_zip, host_id, activity, skill_level }) {

    const newDate = new Date(date_time)
    const dateString = newDate.toLocaleDateString()
    const timeString = newDate.toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit" })

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
    {/* <span class="date_time"><h5 class= "ui header">
    Date: </h5> {date_time}
    </span> */}
    <span class="date_time"><h5 class= "ui header">
    Date: </h5> {`${dateString}`}
    </span>
    <br></br>
    <br></br>
    <span class="date_time"><h5 class= "ui header">
    Time: </h5> {`${timeString}`}
    </span>
    <div>
    <div class="ui teal right ribbon label"><div>{participants} participants</div></div>
    <div class="ui pink right ribbon label">{`${activity.activity}`} <div class="detail">level: {skill_level?.skill_level}/10</div></div>
    </div>
</div>

< NavLink to={`/event_details/${id}`}> <button class="fluid ui button"> Details </button> </NavLink>

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