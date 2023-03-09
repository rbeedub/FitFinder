import React from "react";
import { NavLink } from "react-router-dom"

function FavoriteEventsDetailsCard({ event }) {
    return (
        <>
        <div class="teal card">
            <div class="content">
                <div class = "header">
                    <div class="event_name">
                        <h2>{event.event_name}</h2>
                    </div>
                </div>
                <div class="meta">
                </div>
                <br></br>
                <div class="description">
                    <h5 class= "ui header">Description:</h5>
                    <br></br>
                    {event.description}
                </div>
                <br></br>
            </div>
            <div class="extra content">
                <span class="location"><h5 class= "ui header">Location: </h5> {event.location_name}</span>
                <br></br>
                <br></br>
                <span class="date_time"><h5 class= "ui header">Date: </h5> {event.date_time}</span>
                <a class="ui teal right ribbon label">{event.participants} participants</a>
            </div>
            < NavLink to={`/event_details/${event.id}`}> <button class="ui button"> Details </button> </NavLink>
        </div>
    </>
    )
}

export default FavoriteEventsDetailsCard;