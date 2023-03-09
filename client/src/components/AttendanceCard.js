import React from "react";
import ResponseForm from "./ResponseForm";

function AttendanceCard({ user, event, setEvent }) {
    return(
        <>
            <ResponseForm user={user} event={event} setEvent={setEvent}/>
        </>
    )
}

export default AttendanceCard;