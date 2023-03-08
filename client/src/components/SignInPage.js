import SignIn from './SignIn'
import SignUpForm from './SignUpForm'
import React, { useState } from 'react'

function SignInPage ({ setUser }){

    const [showLogin, setShowLogin] = useState(true);
    const [errors, setErrors] = useState([])
    console.log('errors', errors)
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
            
            
            {/* <SignUpForm setUser={setUser} setErrors={setErrors}/> */}
        </div>
    )
}

export default SignInPage;