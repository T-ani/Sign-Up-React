import React, { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function collectData(){     
            
        const data= {
            name: name,
            email: email,
            password: password
        }

         console.log(data);
         let response = axios.post ('http://localhost:3010/register ',
         data);        

         console.log(response);
        
        // axios.post('http://localhost:6000/register',{
        //     name : name,
        //     email: email,
        //     password: password
        // }).then(resul)
    }

    return (
        <div className="item-align">
            <h1>Register</h1>
            <input value={name} className="inputbox" type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input value={email} className="inputbox" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input value={password} className="inputbox" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className="btn" type="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}
export default SignUp;