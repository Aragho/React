
import React, { useState } from "react";
import CustomButton from "../reuseables/CustomButton";
import style from "../styles/login.module.css";
import { Link } from "react-router-dom";

const Login = () =>{

    
    const userDetails = {
        username: "",
        password:"",
    };

    const [data, setData] = useState(userDetails)

    function handleChange(event){
        console.log(event)
        const {name, value}= event.target
        // setData((prevData)=>({...prevData, [name]:value}));
        setData((prevData)=>{
          return {...prevData,[name]:value}
        })

    }

    return(
        <div>
      <form action="">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className={style.input}   
            onChange={handleChange}
            // value={data.username}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="input"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style = {style.btn} type = "Login" textContent= "login"/>
      </form>
      <div>
        <span className  = {style.mine}> Don't have an Account</span>
        <span><Link to={"/signup"}>SignUp</Link></span>
      </div>
    </div>
    )
}
export default Login;