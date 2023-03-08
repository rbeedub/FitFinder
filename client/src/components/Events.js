import React from "react";
import SideMenu from "./SideMenu";
import EventsContainer from "./EventsContainer";
import CreateEvent from "./CreateEvent";

function Events({ events }) {
return (
<>
  <div>
{/* Put two columns here  */}
    < SideMenu /> 
    < EventsContainer events={events} />
    {/* "Create event" button here */}
    <CreateEvent />
</div>
</>
)
}

export default Events;