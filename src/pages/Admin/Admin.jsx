import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Admin.css"
import { logOut } from "../../redux/userRedux";
import { useState } from "react";

const Admin = () => {

    const user= useSelector((state)=> state.user.user.username)

    const dispatch= useDispatch()

    const navigate= useNavigate()

    const handleClick=(e)=>{
	    e.preventDefault();
        dispatch(logOut())

        navigate("/login")
	}  

    const [name, setName]= useState("")
    const [degree, setDegree]= useState("")
    const [university, setUniversity]= useState("")
    const [website, setWebsite]= useState("")
    const [location, setLocation]= useState([])
    const [fees, setFees]= useState()
    const [duration, setDuration]= useState("")
    const [fulltime, setFulltime]= useState(true)
    const [campus, setCampus]= useState("")
    const [about, setAbout]= useState("")
    const [rating, setRating]= useState()
    const [ranking, setRanking]= useState()
    const [credits, setCredits]= useState("")
    const [language, setLanguage]= useState("")
    const [start, setStart]= useState("")
    const [apply, setApply]= useState("")
    const [disciplines, setDisciplines]= useState([])
    const [overview, setOverview]= useState("")
    const [programmestructure, setProgrammestructure]= useState([])
    const [acadrequirements, setAcadrequirements]= useState(" ")
    const [engrequirements, setEngrequirements]= useState([])
    const [otherrequirements, setOtherrequirements]= useState([])
    const [cost, setCost]= useState()

    return (
        <>
            <nav className="navigation">
                <a href="/" className="brand-name">
                    ST
                </a>
            
                <div className="navigation-menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/bachelor">Bachelor</a>
                        </li>
                        <li>
                            <button style={{backgroundColor: "white", padding: "10px 25px", fontSize: "16px"}} onClick={handleClick} >Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{padding: "20vh"}}>
                <div>
                    <input placeholder="Name of the study" onChange={(e)=>setName(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setDegree(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setUniversity(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="Name of the study" onChange={(e)=>setWebsite(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setDegree(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setFees(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>

                <div>
                    <input placeholder="Name of the study" onChange={(e)=>setDuration(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input type="checkbox" name="favorite1" value="chocolate" /> Chocolate
                    <input type="checkbox" name="favorite2" value="vanilla" /> Vanilla
                </div>
                <div>
                    <input placeholder="On Campus or Off Campus" onChange={(e)=>setCampus(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="Name of the study" onChange={(e)=>setWebsite(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setDegree(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
                <div>
                    <input placeholder="email" onChange={(e)=>setFees(e.target.value)} />
                    <button type="submit" >Submit</button>
                </div>
            </div>
        </>
    )
}

export default Admin