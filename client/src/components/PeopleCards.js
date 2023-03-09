import React, { useState } from 'react'


function PeopleCards({ name, username, bio, age, location_name, location_zip, photo, activities }) {

    const [isLiked, setIsLiked] = useState(false)

    function handleLike() {
        setIsLiked(!isLiked)
    }

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
        <div onClick={handleLike}>
        {isLiked == true ? 
        <i class="heart icon" onClick={handleLike}></i> :
        <i class="heart outline icon"></i>}
        </div>
    </span>
    </div>
</div>

)
}

export default PeopleCards;