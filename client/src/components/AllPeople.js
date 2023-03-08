import React from "react";
import PeopleSideMenu from "./PeopleSideMenu";
import PeopleContainer from "./PeopleContainer";

function AllPeople({ people, setPeople }) {
return (
<>
<div class="ui grid">
    <div class="four wide column">
    <PeopleSideMenu/>
        </div>
    <div class="twelve wide column">
    <PeopleContainer people={people} setPeople={setPeople}/>
  </div>
  </div>
</>
)
}

export default AllPeople;