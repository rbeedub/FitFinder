import { useState, } from 'react'

function ActivityDropDown({ idx, selectableActivities, activitySelections, setActivitySelections }){
    
    const [removed, setRemoved] = useState(false)

    const activityDefault = <option key={0} value={null}>--Select an activity--</option>
    const skillDefault = <option key={0} value={null}>{"--Select a skill level (1=Beginner, 10=Expert) --"}</option>

    const activityOptions = selectableActivities.map(a => {
        return <option key={a.id} value={a.id} name={a.activity}>{a.activity}</option>
    })

    const skillOptions = [1,2,3,4,5,6,7,8,9,10].map(s => {
        return <option key={s} value={s}>{s}</option>
    })
    console.log('idx', idx)

    function handleActivityChange(e){
        const newActivitySelections = [...activitySelections]
        newActivitySelections[idx][0] = Number(e.target.value)
        setActivitySelections(newActivitySelections)
    }

    function handleSkillChange(e){
        const newActivitySelections = [...activitySelections]
        newActivitySelections[idx][1] = Number(e.target.value)
        setActivitySelections(newActivitySelections)
    }

    function removeActivity(){
        const newActivitySelections = [...activitySelections]
        newActivitySelections[idx][2] = false
        setActivitySelections(newActivitySelections)
        setRemoved(true)
    }

    return (removed? null : 
        <div class='ui segment'>
            <select name="activity" value={activitySelections?.at(idx)?.at(0)} onChange={handleActivityChange}> 
                {activityDefault}
                {activityOptions}
            </select>
            <select name="skill" value={activitySelections?.at(idx)?.at(1)} onChange={handleSkillChange}>
                {skillDefault}
                {skillOptions}
            </select>
            <button onClick={removeActivity}>Remove</button>
        </div>
        
    )
}

export default ActivityDropDown