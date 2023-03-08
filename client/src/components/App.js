import React, { useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SignInPage from './SignInPage'
import { useState } from 'react'
import NavBar from './NavBar'
import Events from './Events'
import EventDetails from './EventDetails'
import EditProfile from './EditProfile'

function App() {

  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([])
  console.log(user)
  // const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  useEffect(() => {
    // auto-login
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log("users", data));
      }
    });
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/events").then((r) => {
      if (r.ok) {
        r.json().then((data) => setEvents(data));
      }
    });
  }, []);


  useEffect(() => {
    // auto-login
    fetch("/activities").then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log("activities", data));
      }
    });
  }, []);


  if (!user) return <SignInPage setUser = {setUser}/>;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
        <Route path="/event_details/:id">
            <EventDetails
            events={events}
            />
          </Route>
          <Route exact path="/">
            <Events user={user} events={events} />
          </Route>
          <Route path="/edit-profile">
            <EditProfile user={user} setUser={setUser}/>
          </Route>
        </Switch>
      </main>
    </>
  );




return (<>
    {/* <Header/> */}
    {/* <Switch>
    </Switch> */}
    <NavBar setUser={setUser}/>
    <h2>{user ? user.username : "not logged in"}</h2>
    <SignInPage setUser = {setUser}/>
    {/* <p>hello world</p> */}
</>)
}

export default App;