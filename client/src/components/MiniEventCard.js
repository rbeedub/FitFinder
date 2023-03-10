import React from "react";

function MiniEventCard( {person} ) {
// console.log(person);
return(
<div class="ui middle aligned selection list">
  <div class="item">
    <img class="ui avatar image" src={person.photo}/>
    <div class="content">
      {/* <div class="header">{person.events.event_name}</div>
      <div class="description">{person.events.location_name}</div> */}
    </div>
  </div>

</div>
)
}

export default MiniEventCard;