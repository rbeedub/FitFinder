function RespondantCard({ respondant }){

    // if (!event?.respondants || event.respondants.length==0) return null

    return(
        <div class="green card">
            {/* <div class="photo">
                <img src={respondant.photo}/>
            </div> */}
            <div class="content">
                <div class="header">{respondant.name}</div>
                {/* <div class="meta">
                    <a>Age: {respondant.age}</a>
                </div>
                <div class="bio">
                    {respondant.bio}
                </div> */}
            </div>
            <div class="extra content">
                <span class="right floated">
                    {respondant.location_name}
                </span>
            </div>
        </div>
    )
}

export default RespondantCard;