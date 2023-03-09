import React from 'react'


function PeopleCards({ name, username, bio, age, location_name, location_zip, photo, activities }) {

    const activityTags = activities.map(a => {
        return <div class="ui horizontal label">{`${a.activity}`} </div>
    })


    return (

<div class="teal card">
<div class="photo">
    <img src={photo}/>
</div>
<div class="content">
    <div class="header">{name}</div>
    <div class="meta">
    <a>Age: {age}</a>
    </div>
    <div class="bio">
    {bio}
    </div>
    <div>{activityTags}</div>
</div>
<div class="extra content">
    <span class="right floated">
    {location_name}
    </span>
    <span>
    <i class="heart icon"></i>
    likes go here
    </span>
    </div>
</div>

)
}

export default PeopleCards;