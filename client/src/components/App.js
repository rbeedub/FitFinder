import React, { useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SignInPage from './SignInPage'
import { useState } from 'react'
import NavBar from './NavBar'
import Events from './Events'
import EventDetails from './EventDetails'
import EditProfile from './EditProfile'
import AllPeople from './AllPeople'
import CreateEvent from "./CreateEvent";
import Header from "./Header";
import MyFinds from "./MyFinds";

function App() {

  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([])
  //console.log(user)
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

   // get users
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => setPeople(data));
      }
    });
    
    // get events
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((data) => setEvents(data));
      }
    });

  }, []);


  function onEventSubmit(newEvent) {
    setEvents([...events, newEvent])
  }


  function onFormSubmit(editedEvent){
    //console.log(`edit me!`)
  const newEvent = events.map((event) => event.id == editedEvent.id ? editedEvent : event )
    setEvents(newEvent)
    //console.log(editedEvent)
  }

  function removeFromEvents(idObj){
    //console.log(`Delete me!`)
    //console.log('idObj', idObj)
    const removeEvent = events.filter(event => event.id !== Number(idObj))
    //console.log("remove Event", removeEvent)
    setEvents(removeEvent)
  }

  if (!user) return <SignInPage setUser = {setUser}/>;

  return (
    <>
    <Header
    user={user} setUser={setUser}/>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        <Switch>
          <Route path="/all_people">
            <AllPeople
              people={people} 
              setPeople={setPeople}
            />
          </Route>
          <Route path="/my-finds">
            <MyFinds user={user}/>
          </Route>
          <Route path="/create_event">
            <CreateEvent
              onEventSubmit={onEventSubmit}
              user={user}
            />
          </Route>
          <Route path="/event_details/:id">
            <EventDetails
              events={events}
              removeFromEvents={removeFromEvents}
              user={user}
              onFormSubmit={onFormSubmit}
            />
          </Route>
          <Route exact path="/">
              <Events 
                user={user} 
                events={events} 
                setEvents={setEvents}
              />
          </Route>
          <Route path="/edit-profile">
              <EditProfile 
                user={user} 
                setUser={setUser}
              />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;