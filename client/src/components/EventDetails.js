import React from "react";
// import EventMenu from "./EventMenu";
// import AttendanceCard from "./AttendanceCard";
// import ResponseForm from "./ResponseForm";
import EventDetailsContainer from "./EventDetailsContainer";
import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"



function EventDetails( {user, onFormSubmit, removeFromEvents, event_name, date_time, description, participants, location_name,location_zip, host_id, activity, setUser} ) {

    const [event, setEvent] = useState({})
    const{id} = useParams()

    useEffect(()=> {
        fetch(`/events/${id}`)
        .then((response) => response.json())
        .then(res => (setEvent(res)))
    },[])

    console.log("event", event)
    // console.log("event host", event.host)
    // console.log("event host name", event.host.name)

    return (
        <>
            <div class="row">
                <div class="three wide column">
                    {/* < NavLink to="/"> <button class="ui button"> All Events </button> </NavLink> */}
                </div>
                <div class="thirteen wide column">
                    <EventDetailsContainer
                        event_name={event.event_name}
                        date_time={event.date_time}
                        description={event.description}
                        participants={event.participants}
                        location_name={event.location_name}
                        location_zip={event.location_zip}
                        host_id={host_id}
                        activity={event?.activity}
                        removeFromEvents={removeFromEvents}
                        user={user}
                        host={event?.host}
                        event={event}
                        onFormSubmit={onFormSubmit}
                        setEvent={setEvent}
                        setUser={setUser}
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