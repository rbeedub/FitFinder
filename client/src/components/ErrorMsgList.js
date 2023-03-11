import {useState} from 'react'
function ErrorMsgList( { errors } ){
    const [isClicked, setIsClicked] = useState(false)

    if (!errors || errors.length == 0) return null

    const errorMsgs = errors.map( (e, i) => <li key={i}>{e}</li>)

    return isClicked ? null : 
     
        <div class="ui error message">
            <i class="close icon" onClick={()=>setIsClicked(true)}></i>
            <div class="header">
                There were some errors with your submission:
            </div>
            <ul class="list">
                {errorMsgs}
            </ul>
        </div>

    
}

export default ErrorMsgList;