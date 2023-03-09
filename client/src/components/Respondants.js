import RespondantCard from './RespondantCard'

function Respondants({ event }){

    if (!event?.yesses) return null

    return(
        <div>
            <h3>Yesses</h3>
            {event.yesses.map(r => <RespondantCard key={r.id} respondant={r} />)}
            <h3>Maybes</h3>
            {event.maybes.map(r => <RespondantCard key={r.id}  respondant={r} />)}
            <h3>Nos</h3>
            {event.nos.map(r => <RespondantCard key={r.id} respondant={r} />)}

        </div>
    )
}

export default Respondants;