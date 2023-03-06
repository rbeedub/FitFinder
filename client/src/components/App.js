import React, { useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SignInPage from './SignInPage'
import { useState } from 'react'
import NavBar from './NavBar'

function App() {

  const [user, setUser] = useState(null);
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