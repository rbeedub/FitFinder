import React, { useEffect } from "react";
import SideMenu from "./SideMenu";
import EventsContainer from "./EventsContainer";
import CreateEvent from "./CreateEvent";

function Events({ events, setEvents }) {

  useEffect(() => {
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((data) => setEvents(data));
      }
    });
  }, [])

return (


<div class="ui grid">
<div class="ui menu">
    <div class="four wide column">
    <SideMenu />
    </div>
    
    <div class="twelve wide column">

    <EventsContainer events={events} />
    </div>
  </div>

  </div>

)}

export default Events;