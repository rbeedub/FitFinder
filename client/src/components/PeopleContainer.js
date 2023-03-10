import React from "react";
import PeopleCards from "./PeopleCards";

function PeopleContainer({ people, setPeople, user, setUser, likes, setLikes }) {

const peopleCards = people?.map((p) => {
   return <PeopleCards key={p.id} {...p} p={p} user={user} setUser={setUser} likes={likes} setLikes={setLikes}/>
})
return (
<>


<div class="ui fluid four cards">
{peopleCards}
</div>
</>
)
}

export default PeopleContainer;