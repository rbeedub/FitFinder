import SignIn from './SignIn'
import SignUpForm from './SignUpForm'
import React, { useState } from 'react'
import ErrorMsgList from './ErrorMsgList'

function SignInPage ({ setUser }){

    const [showLogin, setShowLogin] = useState(true);
    const [errors, setErrors] = useState([])

    // const errorMsgs = errors.length > 0 ? errors.map( (e, i) => <h4 key={i}>{e}</h4>) : null
    return (
        <div>
            {showLogin ? <>
                <SignIn setUser = {setUser} setErrors={setErrors}/> 
                <button onClick={() => setShowLogin(!showLogin)}>Show Sign up</button>
            </>
                
            : <>
                <SignUpForm setUser={setUser} setErrors={setErrors}/> 
                <button onClick={() => setShowLogin(!showLogin)}>Show Log in</button>
            </> 
            }       
            <ErrorMsgList errors={errors}/>            
            {/* <SignUpForm setUser={setUser} setErrors={setErrors}/> */}
        </div>
    )
}

export default SignInPage;