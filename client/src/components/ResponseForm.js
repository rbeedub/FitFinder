import React, { useState } from "react";

function ResponseForm({ user, event, setEvent }) {

    const [response, setResponse] = useState("")

    function onChange(e){
        setResponse(e.target.value)
    }

    function handleResponseSubmit(e){
        e.preventDefault()
        fetch(`/responses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                event_id: event.id,
                response: response
            })
        })
        .then(r => {
            if(r.ok){
                r.json().then(data => {
                    console.log("response", data)
                    if(response=='yes') user.yesses = [...user.yesses, event]
                    if(response=='maybe') user.maybes = [...user.maybes, event]
                    if(response=='no') user.nos = [...user.nos, event]
                    setEvent(data)
                })
            } else {
                r.json().then(err => {
                    console.log("errors", err.errors)
                })
            }
        })
    }


    return (
        <form onSubmit={handleResponseSubmit}>
            <div class="ui form">
                <div class="inline fields">
                    <label for="response">Are you going?</label>
                    <div class="field">
                        <div class="ui radio ">
                            <input type="radio" name="response" value="yes" checked={response.yes} class="hidden" onChange={onChange}/>
                            <label>Yes</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio ">
                            <input type="radio" name="response" value="no" checked={response.no} class="hidden" onChange={onChange}/>
                            <label>No</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio ">
                            <input type="radio" name="response" value="maybe" checked={response.maybe} class="hidden" onChange={onChange}/>
                            <label>Maybe</label>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit RSVP</button>
            </div>
        </form>
    )
}

export default ResponseForm;