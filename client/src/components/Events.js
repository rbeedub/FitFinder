import React from "react";
import SideMenu from "./SideMenu";
import EventsContainer from "./EventsContainer";
import CreateEvent from "./CreateEvent";

function Events({ events }) {
return (

<div class="ui grid">
    <div class="four wide column">
    < SideMenu />
    </div>
    <div class="twelve wide column">
    < EventsContainer events={events} />
  </div>
  </div>

)
}

export default Events;