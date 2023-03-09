import React from "react";
import EventCard from "./EventCard";


function EventsContainer({ events }) {

   const eventCards = events.map((e) => <EventCard key={e.id} {...e}/>)

return (


<div class="ui fluid five cards">

{eventCards}

</div>


)
}

export default EventsContainer;