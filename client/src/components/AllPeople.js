import React, { useState, useEffect } from "react";
import PeopleSideMenu from "./PeopleSideMenu";
import PeopleContainer from "./PeopleContainer";

function AllPeople({ user, likes, setLikes, setUser }) {

  const [people, setPeople] = useState([])

  useEffect(()=>{
    // get users
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => setPeople(data));
      }
    });
  }, [])


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