import React from "react";
import FavoriteEventsContainer from "./FavoriteEventsContainer";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";

function MyFinds() {
return (
<>
<p>Render Events and favorited friends here</p>
<MyFindsPeopleContainer/>
<FavoriteEventsContainer/>

</>
)
}

export default MyFinds;