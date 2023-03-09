import React from "react";
import SignInPage from "./SignInPage";
import LandingPageMovie from '../assets/LandingPageMovie.mp4';

function LandingPage( {setUser} ) {
return (
<>
<video src={LandingPageMovie} autoPlay loop={true} />
<div class="ui hidden divider"></div>
<img src="./images/AboutFitFinder.svg"/>
<div class="ui hidden divider"></div>
<div> 
    
</div>
<SignInPage
setUser = {setUser} 
/>
</>
)
}

export default LandingPage;