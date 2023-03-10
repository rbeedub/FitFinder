import React from "react";
import FavoriteEventsContainer from "./FavoriteEventsContainer";
import MyFindsPeopleContainer from "./MyFindsPeopleContainer";

function MyFinds({ user }) {
    return (
        <>

<div class="ui celled grid">
  <div class="row">
    <div class="three wide column">
    <p><h2>Following</h2></p>
      <img/>
    </div>
    <div class="thirteen wide column">
     
      <div class="ui cards">
      <MyFindsPeopleContainer user={user} />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="three wide column">
    <p><h2>Attending</h2></p>
      <img/>
    </div>
    <div class="thirteen wide column">

      <FavoriteEventsContainer user={user}/>
    </div>
    {/* <div class="three wide column">
      <img/>
    </div> */}
  </div>
</div>

{/* 
            <MyFindsPeopleContainer user={user} />
            <FavoriteEventsContainer user={user}/> */}
        </>
    )
}

export default MyFinds;