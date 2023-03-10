import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserCard from "./UserCard"
import MiniEventCard from "./MiniEventCard";
import RSVPMiniEventCard from "./RSVPMiniEventCard";
import FollowingItem from "./FollowingItem";
import MiniActivityCard from "./MiniActivityCard";

function PersonDetail(){

    const [person, setPerson] = useState({})
    const [activities, setActivities] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getPerson()
    }, [])

    function getPerson() {
        fetch(`/userDetail/${id}`)
        .then(r => r.json())
        .then(person => {
            setPerson(person)
            console.log(person)
            setActivities(person?.activities || [])
        })
    }

    // console.log(person)

    const rsvpEventCards = person.yesses?.map(e => <RSVPMiniEventCard key={e.id} person={person} event={e}/>)
    // const hostedEventCards = person.hosted_events.map(e => <MiniEventCard person={person} event={e}/>)
    const followingDetailCard = person.liked_users?.map(e => <FollowingItem key={e.id} following={e} />)
    
    // const miniActivityCard = person.activities?.map((e) => {
    //     return <MiniActivityCard activity={e} />
    // })

    // !!person && !!person.activities && person.activities.length>0


    // const miniActivityCard = !!person && !!person.activities && person.activities.length>0 ? person.activities.map((e) => {
    //     return <MiniActivityCard activity={e} />
    // }) : null

     const miniActivityCard = activities?.map((e) => {
         return <MiniActivityCard activity={e} />
     })

    console.log("activities", activities)

    // const activityTags = person.activities?.length > 0 ? person.activities?.map(a => {
    //     // return <div class="ui horizontal label">{`${a?.activity} : ${a?.skill_level}` } </div>
    //     return <div class="ui horizontal label">Test</div>
    // }) : null



return (
<>
<div class="ui equal width grid">
<div class="column">
<div class="ui segments">
<div class="ui segment">
<p>Hosted Events</p>
</div>
<div class="ui segments">
    <div class="ui segment">
{/* <MiniEventCard
person={person} />*/}

    </div>
</div>
</div>
<div class="ui segments">
<div class="ui segment">
<p>RSVP'd Events</p>
</div>
<div class="ui segments">
<div class="ui segment">
{rsvpEventCards}
</div>
</div>
</div>

</div>
<div class="column">
<UserCard
user={person}/>
</div>
<div class="column">

{/* <div class="ui segments">
<div class="ui segment">
<p>Interests and Skills</p>
</div>
<div class="ui segments">
<div class="ui segment">
 {miniActivityCard}
</div>
</div>
</div> */}

<div class="ui segments">
<div class="ui segment">
<p>Following</p>
</div>
<div class="ui segments">
<div class="ui segment">
<div class="ui very relaxed list">
{followingDetailCard}
</div>
</div>
</div>
</div>
<div class="ui segments">
<div class="ui segment">
<p>Interests and Skills</p>
</div>
<div class="ui segments">
<div class="ui segment">
<div class="ui very relaxed list">
{miniActivityCard}
</div>
</div>
</div>
</div>
</div>
<div class="equal width row">
<div class="column"></div>
<div class= "column"></div>
</div>
</div>
<div>


</div>
</>

)
}

export default PersonDetail;