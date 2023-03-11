import ActivityDropDown from "./ActivityDropDown"
import { useState } from 'react'


function ActivitySelectorForm({ activities, activitySelections, setActivitySelections}){

    const [activityCount, setActivityCount] = useState(activitySelections?.length)

    // function onCheckedChange(e, a){
    //     let newActivities
    //     if(e.target.checked){
    //         newActivities = [...formData?.activities, a]
    //     } else {
    //         newActivities = formData.activities.filter(act => act.id != a.id)
    //     }
    //     const newFormData = {...formData, activities: newActivities}
    //     setFormData(newFormData)
    // }
    
    // const checkboxes = activities.map(a => {
    //     return(
    //         <div class="ui checkbox" key={a.id}>
    //             <input type="checkbox" name={a.activity} value={a.id} checked={formData?.activities ? formData?.activities.find(act => act.id==a.id) : false} onChange={(e)=>{onCheckedChange(e, a)}}/>
    //             <label>{a.activity}</label>
    //         </div>
    //     )
    // })

    const activityDropDowns = []
    for (let i = 0; i < activityCount; i++){
        activityDropDowns.push(<ActivityDropDown key={i} idx={i} selectableActivities={activities} activitySelections={activitySelections} setActivitySelections={setActivitySelections}/>)
    }

    function handleAddActivity(){
        const newActivitySelections = [...activitySelections, [null, null, true]]
        setActivitySelections(newActivitySelections)
        setActivityCount((prev)=>prev+1)
    }

    return(
        <div class="field">
            <label>Select Activities</label>
            {/* {checkboxes} */}
            {activityDropDowns}
            <button onClick={handleAddActivity}>Add an Activity</button>
        </div>
    )
} 
export default ActivitySelectorForm;