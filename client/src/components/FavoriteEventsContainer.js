import React from "react";
import FavoriteEventsDetailsCard from "./FavoriteEventDetailsCard";

function FavoriteEventsContainer({ user }) {

    const yesCards = user.yesses?.map(e=> {
        return <FavoriteEventsDetailsCard key={e.id} event={e} />
    })

    return (
        <>

            <div class="ui fluid four cards">
                {yesCards}
            </div>
        </>
    )
}

export default FavoriteEventsContainer;