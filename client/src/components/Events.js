import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import EventsContainer from "./EventsContainer";
import CreateEvent from "./CreateEvent";
import EventMenu from "./EventMenu";
import fitSideBanner from '../assets/FitSideBannerMovie.mp4'

function Events({ events, setEvents }) {

  const [searchCriteria, setSearchCriteria] = useState("")

  useEffect(() => {
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((data) => setEvents(data));
      }
    });
  }, [])

  let sortedEvents = events
  if(searchCriteria == 'date'){
    sortedEvents = [...events].sort((p1, p2) => p1.date_time < p2.date_time ? -1 : 1)
  } else if(searchCriteria == 'activity'){
    sortedEvents = [...events].sort((p1, p2) => p1.activity.activity < p2.activity.activity ? -1 : 1)
  } else if(searchCriteria == 'city'){
    sortedEvents = [...events].sort((p1, p2) => p1.location_name < p2.location_name ? -1 : 1)
  } else if(searchCriteria == 'participants'){
    sortedEvents = [...events].sort((p1, p2) => p2.participants - p1.participants)
  } else if(searchCriteria == 'skill'){
    sortedEvents = [...events].sort((p1, p2) => p1.skill_level.skill_level - p2.skill_level.skill_level)
  }


return (


<div class="ui grid">
<div class="ui menu">

    <div class="four wide column">
    <SideMenu searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria}/>
    </div>
    
    <div class= "eight wide column">

    <EventsContainer events={sortedEvents} />
    </div>

        <div class="four wide column">
       <EventMenu />
    </div>
  </div>

  </div>

)}

export default Events;