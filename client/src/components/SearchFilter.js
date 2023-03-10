import React from "react";

function SearchFilter({ searchCriteria, setSearchCriteria }) {
return(
<>
<div class="header teal item">Sort By</div>
<a class={`${searchCriteria=='date'? 'active': ""} item`} name="date" onClick={(e)=>{setSearchCriteria(e.target.name)}}>
Date
</a>
<a class={`${searchCriteria=='skill'? 'active': ""} item`} name="skill" onClick={(e)=>{setSearchCriteria(e.target.name)}}>
Skill Level
</a>
<a class={`${searchCriteria=='activity'? 'active': ""} item`} name="activity" onClick={(e)=>{setSearchCriteria(e.target.name)}}>
Activity Type
</a>
<a class={`${searchCriteria=='city'? 'active': ""} item`} name="city" onClick={(e)=>{setSearchCriteria(e.target.name)}}>
City
</a>
<a class={`${searchCriteria=='participants'? 'active': ""} item`} name="participants" onClick={(e)=>{setSearchCriteria(e.target.name)}}>
Most Participants
</a>

</>
)
}

export default SearchFilter;