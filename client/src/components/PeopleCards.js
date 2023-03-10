import React, { useState } from 'react'


function PeopleCards({ user, p, name, username, bio, age, location_name, location_zip, photo, activities, likes, setLikes, setUser }) {

    const [isLiked, setIsLiked] = useState(user.liked_users.map((u) => u?.id).includes(p.id))

    function handleLike() {
        // setIsLiked(!isLiked).then(() => onLike())
        onLike()
        setIsLiked(!isLiked)
    }

    function onLike() {

        const newLike = {
            liker_id: user.id,
            liked_id: p.id
        }

        if (isLiked === false) {
            fetch("/likes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLike)
            })
            .then((r)=> {
                if(r.ok){
                    r.json().then(like => {
                        console.log("liked", like)
                        setUser(like)
                    })
                } else {
                    // r.json().then(err => setErrors(err.errors))
                }
            })
        } else if (isLiked === true) {
            fetch(`/unlikes`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newLike)
            })
            .then((r)=> {
                if(r.ok){
                    r.json().then(unlike => {
                        console.log("unliked", unlike)
                        setUser(unlike)
                    })
                } else {
                    // r.json().then(err => setErrors(err.errors))
                }
        })
    }
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
        {isLiked === true ? 
        <i class="heart icon"></i> :
        <i class="heart outline icon"></i>}
        </div>
    </span>
    </div>
</div>

)
}

export default PeopleCards;