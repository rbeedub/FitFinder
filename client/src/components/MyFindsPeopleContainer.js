import react from "react";
import MyFindsPeopleCard from './MyFindsPeopleCard'

function MyFindsPeopleContainer({ user }) {

    const likedCards = user?.liked_users?.map(liked => {
        //<h2>{liked.name}</h2>
        return <MyFindsPeopleCard key={liked.id} liked={liked} />
    })

    console.log('liked_users', user.liked_users)
    console.log('likedCards', likedCards)

    return (
        <>

      <div class="ui cards">
      {likedCards}
      </div>

{/* 


<div class="ui grid">
<div class="one wide column">    </div>

  <div class="three wide column">   <h2>Following</h2> </div>
  <div class="nine wide column">
  <div class="ui fluid link cards">
                {likedCards}
            </div>
  </div>
  <div class="three wide column">  </div>
</div> */}



        </>
    )
}

export default MyFindsPeopleContainer;