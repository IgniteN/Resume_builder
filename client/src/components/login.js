import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//Sending signup data to backend
  async function loginUser(event){
    event.preventDefault()
    const response = await fetch(process.env.URI,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
    if(data.user!=="false"){
      localStorage.setItem("token",data.user)
      window.location.href = "/home"
    }
    else{
      alert("Invalid e-mail or password")
    }
  }

  return (
    <>
    <div className="container">

    {/* registration part start here  */}
      <div className="register">

        {/* Login heading  here  */}
        <h1 className="login">LOGIN</h1>  

        {/* form starts here  */}
        <form onSubmit={loginUser}>

          <input // input for email
            value={email}
            type="email"
            className="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input // input for password 
            value={password}
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input className="submit" type="submit" value="LOGIN"  />
        </form>
        {/* form ends here  */}

      </div>
      {/* registration part ends here  */}


    </div>
    </>
  );
}

export default App;
