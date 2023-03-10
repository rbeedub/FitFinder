import React from 'react'


function UserCard( { user } ) {


return (
<div class="ui fluid card">
<div class="image">
<img src={user.photo}/>
</div>
<div class="content">
<a class="header">{user.name}</a>
<br></br>
<div class="meta">
<span class="ui tiny header"> Username: </span><p>{user.username}</p>
<br></br>
<span class="ui tiny header"> Age: </span><p>{user.age}</p>
</div>

<span class="ui tiny header">Bio: </span>
<p>{user.bio}</p>
</div>
<div class="extra content">
<a>
    <i class="user icon"></i>
    <span class="ui tiny header">Location: </span>
{user.location_name}
</a>
</div>
</div>


)
}

export default UserCard;