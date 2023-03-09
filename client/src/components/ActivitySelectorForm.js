function ActivitySelectorForm({ activities, formData, setFormData }){


    function onCheckedChange(e, a){
        let newActivities
        if(e.target.checked){
            newActivities = [...formData?.activities, a]
        } else {
            newActivities = formData.activities.filter(act => act.id != a.id)
        }
        const newFormData = {...formData, activities: newActivities}
        setFormData(newFormData)
    }
    
    const checkboxes = activities.map(a => {
        return(
            <div class="ui checkbox" key={a.id}>
                <input type="checkbox" name={a.activity} value={a.id} checked={formData?.activities ? formData?.activities.find(act => act.id==a.id) : false} onChange={(e)=>{onCheckedChange(e, a)}}/>
                <label>{a.activity}</label>
            </div>
        )
    })

    return(
        <>
            {checkboxes}
        </>
    )
} 
export default ActivitySelectorForm;