import React, { useState, useEffect } from "react";
import PeopleSideMenu from "./PeopleSideMenu";
import PeopleContainer from "./PeopleContainer";

function AllPeople({ user, likes, setLikes, setUser }) {

  const [people, setPeople] = useState([])
  const [searchCriteria, setSearchCriteria] = useState({type: "", asc: false})
  const [sortAsc, setSortAsc] = useState(true)

  useEffect(()=>{
    // get users
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => setPeople(data));
      }
    });
  }, [])

  let sortedPeople = people
  if(searchCriteria.type == 'name'){
    sortedPeople = [...people].sort((p1, p2) => p1.username < p2.username ? -1 : 1)
  } else if(searchCriteria.type == 'age'){
    sortedPeople = [...people].sort((p1, p2) => p1.age - p2.age )
  } else if(searchCriteria.type == 'city'){
    sortedPeople = [...people].sort((p1, p2) => p1.location_name < p2.location_name ? -1 : 1)
  }

  if(!searchCriteria.asc) sortedPeople = sortedPeople?.reverse()

  // const sortedPeople = [...people].sort((p1, p2) => p1.username < p2.username ? -1 : 1)
  console.log("sortedPeople",sortedPeople)

return (
<>
<div class="ui grid">
   
    <div class="thirteen wide column">
    <PeopleContainer people={sortedPeople} setPeople={setPeople} user={user} setUser={setUser} likes={likes} setLikes={setLikes}/>
  </div>
   <div class="three wide column">
    <PeopleSideMenu searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} sortAsc={sortAsc} setSortAsc={setSortAsc}/>
  </div>
  </div>
</>
)
}

export default AllPeople;