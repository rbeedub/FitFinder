function MyFindsPeopleCard({ liked }){
    return(
        // <div class="teal card">
        //     <div class="photo">
        //         <img src={liked.photo}/>
        //     </div>
        //     <div class="content">
        //         <div class="header">{liked.name}</div>
        //         <div class="meta">
        //         <a>Age: {liked.age}</a>
        //         </div>
        //         <div class="bio">
        //         {liked.bio}
        //         </div>
        //     </div>
        //     <div class="extra content">
        //         <span class="right floated">
        //         {liked.location_name}
        //         </span>
        //         <span>
        //         <i class="heart icon"></i>
        //         likes go here
        //         </span>
        //     </div>
        // </div>




  <div class="card">
    <div class="content">
      <img class="right floated tiny ui image" src={liked.photo}/>
      <div class="header">
      {liked.name}
      </div>
      <div class="meta">
      <a>Age: {liked.age}</a>
      </div>
      <div class="description">
        {liked.bio}
      </div>
    </div>
    <div class="extra content">
    <span class="right floated">
        {liked.location_name}
        </span>
        <span>
        <i class="heart icon"></i>

        </span>
        </div>

</div>


    )
}

export default MyFindsPeopleCard;