import React from "react";

function PeopleSearchFilter({searchCriteria, setSearchCriteria, sortAsc, setSortAsc }) {

    function handleClick(e){
        setSearchCriteria({type: e.target.name, asc: !searchCriteria.asc})
    }

return(

<div class="ui vertical text menu">
<div class="header item">Sort By</div>
<a class={`${searchCriteria.type=='age'? 'active': ""} item`} name="age" onClick={handleClick}>
{`Age ${searchCriteria.type=='age'? searchCriteria.asc ? "↑" : "↓" : ""}`}
</a>
<a class={`${searchCriteria.type=='name'? 'active': ""} item`} name="name" onClick={handleClick}>
Name {searchCriteria.type=='name'? searchCriteria.asc ? "↑" : "↓" : ""}
</a>
<a class={`${searchCriteria=='city'? 'active': ""} item`} name="city" onClick={handleClick}>
City {searchCriteria.type=='city'? searchCriteria.asc ? "↑" : "↓" : ""}
</a>
<a class="item">
Activity
</a>
</div>
)
}


export default PeopleSearchFilter;