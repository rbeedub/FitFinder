import SignIn from './SignIn'
import SignUpForm from './SignUpForm'
import React, { useState } from 'react'
import ErrorMsgList from './ErrorMsgList'

function SignInPage ({ setUser }){

    const [showLogin, setShowLogin] = useState(true);
    const [errors, setErrors] = useState([])

    // const errorMsgs = errors.length > 0 ? errors.map( (e, i) => <h4 key={i}>{e}</h4>) : null
    return (
    <>


<div class="ui inverted teal segment">
<div class="ui grid">
<div class="eight wide column">
<div class="ui inverted teal segment">
<img class="ui centered medium image"  src="./images/FindFitFriend2.svg"/>
</div>
</div>
  <div class="eight wide column">
  <h2 class="ui center aligned white icon header">
  <i class="inverted circular users icon"></i>
  Already a Member?
</h2>

        <div>
            {showLogin ? <>
                <SignIn setUser = {setUser} setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Sign up</button>
            </>
                
            : <>
                <SignUpForm setUser={setUser} setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Log in</button>
            </> 
            }       
            <ErrorMsgList errors={errors}/>            
            {/* <SignUpForm setUser={setUser} setErrors={setErrors}/> */}
            </div>


  </div>


{/* <h5 class= "ui header"> Already a Member?</h5>
        <div>
            {showLogin ? <>
                <SignIn setUser = {setUser} setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Sign up</button>
            </>
                
            : <>
                <SignUpForm setUser={setUser} setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Log in</button>
            </> 
            }       
            <ErrorMsgList errors={errors}/>            
            {/* <SignUpForm setUser={setUser} setErrors={setErrors}/> */}
            
</div>
</div>
    </>
    )
}

export default SignInPage;