import React from "react";
import PeopleSideMenu from "./PeopleSideMenu";
import PeopleContainer from "./PeopleContainer";

function AllPeople({ people, setPeople }) {
return (
<>
<div class="ui grid">
   
    <div class="thirteen wide column">
    <PeopleContainer people={people} setPeople={setPeople}/>
  </div>
   <div class="three wide column">
    <PeopleSideMenu/>
  </div>
  </div>
</>
)
}

export default AllPeople;