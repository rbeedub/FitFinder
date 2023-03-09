import React from "react";
import ResponseForm from "./ResponseForm";

function AttendanceCard({ user, event }) {
return(
<>

<ResponseForm user={user} event={event}/>

</>
)
}

export default AttendanceCard;