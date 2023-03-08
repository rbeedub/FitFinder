import React from "react";
import PeopleCards from "./PeopleCards";

function PeopleContainer({ people, setPeople }) {

const peopleCards = people.map((p) => {
   return <PeopleCards key={p.id} {...p}/>
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