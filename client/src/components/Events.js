import React, { useEffect } from "react";
import SideMenu from "./SideMenu";
import EventsContainer from "./EventsContainer";
import CreateEvent from "./CreateEvent";
import EventMenu from "./EventMenu";
import fitSideBanner from '../assets/FitSideBannerMovie.mp4'

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
    
    <div class= "eight wide column">

    <EventsContainer events={events} />
    </div>

        <div class="four wide column">
       <EventMenu />
    </div>
  </div>

  </div>

)}

export default Events;