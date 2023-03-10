import React from "react"
import { Link } from 'react-router-dom'

function FollowingItem( {following} ) {
    console.log(following)
    
    return(
<div class="item">
    <img class="ui avatar image" src={following.photo}/>
    <div class="content">
      <div class="header"><Link to={`/person-details/${following.id}`}>{following.name}</Link></div>
      {/* <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div> */}
    </div>
  </div>
  )
  }

export default FollowingItem
