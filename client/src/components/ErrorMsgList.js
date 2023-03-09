
function ErrorMsgList( { errors } ){

    if (!errors || errors.length == 0) return null

    const errorMsgs = errors.map( (e, i) => <li key={i}>{e}</li>)

    return(
        <div class="ui error message">
            <i class="close icon"></i>
            <div class="header">
                There were some errors with your submission:
            </div>
            <ul class="list">
                {errorMsgs}
            </ul>
        </div>
    )
}

export default ErrorMsgList;