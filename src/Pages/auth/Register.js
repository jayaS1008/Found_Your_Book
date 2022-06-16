import React, { useState } from "react";
import {auth} from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';

const Register =()=>
{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setCpassword]=useState();
    const [username,setUsername]=useState();
    const handleSubmit = aysnc(e)=>
    {
        e.preventDefault();
        const config={
          url:'http://localhost:3000/register/complete',
          handleCodeInApp:true

        }
        await auth.sendSignInLinkToEmail(email,config)
        toast.success(`email is sent to the email address ${email}.Click on the link to complete your registration `);
        //save the email to local storage
        window.localStorage.setItem('emailForRegistration' ,email);
        setEmail("");
    }
    return(
        <div >
         <form style={{ width: '18rem',
                        margin: '100px auto'  
                       }}>
                       <h4>Register Here!!</h4>
            <label>Email</label>
            <input className="form-control " type = "email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>User Name</label>
            <input type = "username" value={username} className="form-control " onChange={(e)=>setUsername(e.target.value)} ></input>
            <label>Password</label>
            <input type = "password" value={password} name="password" className="form-control " onChange={(e)=>setCpassword(e.target.value)}></input>
            <label>Confirm Password</label>
            <input type = "cpassword" value={cpassword} className="form-control " onChange={(e)=>setPassword(e.target.value)}></input>
            <br/>
            <button type = "submit" onClick={handleSubmit}>Submit</button>
         </form>
        </div>
    );
}

export default Register;