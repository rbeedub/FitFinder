function RespondantCard({ respondant }){

    console.log("respondant", respondant)
    // if (!event?.respondants || event.respondants.length==0) return null

    return(
        <>
        {/* <div class="event">
        <img class="ui mini circular image" src="/images/avatar2/small/molly.png"/>
        <div class="content">
          <div class="ui sub header">{respondant.name}</div>
          {respondant.location_name}
        </div>
        </div> */}

        {/* <a class="ui image label">
        <img src="./public/images/31.svg"/>
        {respondant.name}
        </a> */}
        <a class="ui teal image label">
        <img src={respondant.photo}/>
        {respondant.name}
        {/* <div class="detail"> {respondant.location_name}</div> */}
        </a>
        {/* <div class="green card">
            <div class="photo">
                <img src={respondant.photo}/>
            </div> 
            <div class="content">
                <div class="header">{respondant.name}</div> 
                <div class="meta">
                    <a>Age: {respondant.age}</a>
                </div>
                <div class="bio">
                    {respondant.bio}
                </div> 
            </div>
            <div class="extra content">
                <span class="right floated">
                    {respondant.location_name}
                </span>
            </div> 
            </div> */}
    </>
    )
}

export default RespondantCard;