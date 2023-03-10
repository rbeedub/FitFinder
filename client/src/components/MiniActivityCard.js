import React from "react";

function MiniActivityCard( {activity} ) {

return(
<>
<a class="ui teal image label">
  {activity.activity}
  <div class="detail">{activity.skill_level}</div>
</a>
</>
)

}
export default MiniActivityCard;

