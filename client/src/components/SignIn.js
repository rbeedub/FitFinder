import React, {useState} from 'react'

function SignIn({ setUser }) {
    console.log("setUser from Signin", setUser)

        const initialData = {
            name:'',
            email:'',
            password: '',
        }

const [formData, setFormdata] = useState(initialData)

// function handleFormChange(e) {
//     const {name, value} = e.target;
//     setFormdata({...formData, [name]: value})
// }

// function handleFormSubmit (e) {
//     e.preventDefault();

//     fetch('', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//     })
//     .then((response) => response.json())
//     .then(onMeanieSubmit)

//     .then(setFormdata(initialData))
// }

const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


return (

    <div class="ui equal width grid">
    <div class="column">
    </div>
    <div class="eight wide column">
        <div class="ui segment">
        <form class="ui form" onSubmit={handleSubmit}>
        <div class="ui one column ">
        <div >
            <div class="one field">
                <div class="field">
                <label>Username</label>
                <input value= {username} type="text" name="username" placeholder="username" required onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div class="field">
                <label>Password </label>
                <input value= {password} type="text" name="password" placeholder="password"required onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
            <button class="ui button" type="submit">Login</button>
            </div>
        </div>
    </form>
        </div>
    </div>
    </div>

    )
    }

export default SignIn;