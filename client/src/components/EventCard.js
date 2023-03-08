import React from "react";
import EventDetails from "./EventDetails";


function EventCard({ event_name, date_time, description, participants, location_name }) {

return (

    // render some event details here

<div class="ui card">
    <div class="content">
        <div class="event_name">{event_name}</div>
        <div class="meta">
        <span class="date">{date_time}</span>
        </div>
        <div class="ui hidden divider"></div>
        <div class="description">
        Description: {description}
        </div>
        <div class="location_name">
        City: {location_name}
        </div>
        <div class="participants">
        Number of Participants: {participants}
        </div>
    </div>
    {/* <div class="extra content">
        <a href="https://i.insider.com/608335b408610f0018b0f3d8?width=700">
        <i class="user icon"></i>
        </a>
    </div> */}
    <button class="ui button" >
   More Details
    </button>


{/* create link to  */}
    <EventDetails />

</div>

)
}

export default EventCard;