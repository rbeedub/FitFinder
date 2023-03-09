import React from "react";
import ResponseForm from "./ResponseForm";

function AttendanceCard({ user, event, setEvent, setUser }) {
    return(
        <>
            <ResponseForm user={user} event={event} setEvent={setEvent} setUser={setUser}/>
        </>
    )
}

export default AttendanceCard;