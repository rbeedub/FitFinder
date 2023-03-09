import React from "react";
import FavoriteEventsContainer from "./FavoriteEventsContainer";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";

function MyFinds({ user }) {
    return (
        <>
            <MyFindsPeopleContainer user={user} />
            <FavoriteEventsContainer user={user}/>
        </>
    )
}

export default MyFinds;