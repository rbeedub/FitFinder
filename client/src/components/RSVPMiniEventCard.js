import React from "react";

function RSVPMiniEventCard( {person, event} ) {
console.log(person);
return(
<div class="ui middle aligned divided list">
  <div class="item">
    {/* <img class="ui avatar image" src={person.photo}/> */}
    <div class="content">
      <div class="header">{event.event_name}</div> 
    <div class="description">{event.location_name}</div> 
    </div>
  </div>

</div>
)
}

export default RSVPMiniEventCard;