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
import LandingPage from "./LandingPage";
import PersonDetail from "./PersonDetail";

function App() {

  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [people, setPeople] = useState([]);
  const [likes, setLikes] = useState([]);
  //console.log(user)
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

  //  // get users
  //   fetch("/users").then((r) => {
  //     if (r.ok) {
  //       r.json().then((data) => setPeople(data));
  //     }
  //   });
    
    // get events
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((data) => setEvents(data));
      }
    });

    // fetch("/likes").then((r) => {
    //   if (r.ok) {
    //     r.json().then((data) => setLikes(data));
    //   }
    // });

  }, []);


  function onEventSubmit(newEvent) {
    setEvents([...events, newEvent])
  }


  

  function removeFromEvents(idObj){
    //console.log(`Delete me!`)
    //console.log('idObj', idObj)
    const removeEvent = events.filter(event => event.id !== Number(idObj))
    //console.log("remove Event", removeEvent)
    setEvents(removeEvent)
  }

  if (!user) return <LandingPage setUser = {setUser}/>;

  return (
    <>
    <Header
    user={user} setUser={setUser}/>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        <Switch>
          
        <Route path="/edit-profile">
              <EditProfile 
                user={user} 
                setUser={setUser}
              />
              </Route> 
          <Route path="/person-details/:id">
            <PersonDetail />
          </Route>
          <Route path="/all_people">
            <AllPeople
              user={user}
              setUser={setUser}
              people={people} 
              setPeople={setPeople}
              likes={likes}
              setLikes={setLikes}
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
              setUser={setUser}
              // onFormSubmit={onFormSubmit}
              setEvents={setEvents}
            />
          </Route>

          <Route exact path="/">
              <Events 
                user={user} 
                events={events} 
                setEvents={setEvents}
              />
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;