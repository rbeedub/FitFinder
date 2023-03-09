import React from "react";
import FavoriteEventsDetailsCard from "./FavoriteEventDetailsCard";

function FavoriteEventsContainer({ user }) {

    const yesCards = user.yesses.map(e=> {
        return <FavoriteEventsDetailsCard key={e.id} event={e} />
    })

    return (
        <>
            <h2>Attending</h2>
            <div class="ui fluid four cards">
                {yesCards}
            </div>
        </>
    )
}

export default FavoriteEventsContainer;