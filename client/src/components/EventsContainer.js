import React from "react";
import EventCard from "./EventCard";


function EventsContainer({ events }) {

    const eventCards = events.map((e) => <EventCard key={e.id} {...e}/>)

return (
<>
{/* format the number of cards here */}

    {eventCards}

</>
)
}

export default EventsContainer;