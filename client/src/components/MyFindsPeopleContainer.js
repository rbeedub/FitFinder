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
            <h2>Following</h2>
            <div class="ui fluid four cards">
                {likedCards}
            </div>
        </>
    )
}

export default MyFindsPeopleContainer;