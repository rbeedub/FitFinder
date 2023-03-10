import React from "react";
import PeopleSideMenu from "./PeopleSideMenu";
import PeopleContainer from "./PeopleContainer";

function AllPeople({ people, setPeople, user, likes, setLikes, setUser }) {
return (
<>
<div class="ui grid">
   
    <div class="thirteen wide column">
    <PeopleContainer people={people} setPeople={setPeople} user={user} setUser={setUser} likes={likes} setLikes={setLikes}/>
  </div>
   <div class="three wide column">
    <PeopleSideMenu/>
  </div>
  </div>
</>
)
}

export default AllPeople;