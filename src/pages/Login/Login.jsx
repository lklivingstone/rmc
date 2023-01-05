import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls"
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const { error }= useSelector(state=>state.user)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
        navigate("/admin")
    }

    return (
        <div>
            <nav className="navigation">
            <a href="/" className="brand-name">
                studyportals
            </a>
        
            <div className="navigation-menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/admin">Admin</a>
                    </li>
                    <li>
                        <a href="/bachelor">Bachelor</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>

            <h1 style={{padding: "10vh 0 0 0"}}>
                LOGIN
            </h1>
            <form onSubmit={handleSubmit}>
                <br/>
                <label >
                    Email:
                </label>
                <br/>
                <input placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <label>
                    Password:
                </label>
                <br/>
                <input placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
                <div>
                    <button type="submit" >Submit</button>
                </div>
                {error && <span style={{color: "red", fontSize: "20px"}}>Invalid Credentials</span>}
            </form>
        </div>
        </div>
    )

}

export default Login;