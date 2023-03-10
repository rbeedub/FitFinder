import React from "react";
import { NavLink } from 'react-router-dom'

function MiniEventCard( {person, event} ) {
// console.log(person);
return(
<div class="ui middle aligned selection list">
  <div class="item">
    <img class="ui avatar image" src={person.photo}/>
    <div class="content">
      <div class="header"><NavLink to={`/event_details/${event.id}`}>{event.event_name}</NavLink></div>
      {/* <div class="description">{person.events.location_name}</div> */}
    </div>
  </div>

</div>
)
}

export default MiniEventCard;