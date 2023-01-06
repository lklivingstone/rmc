import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Admin.css"
import { logOut } from "../../redux/userRedux";
import { useState } from "react";
import { postDegree } from "../../redux/apiCalls";

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

    const [location, setLocation]= useState([{
        each: ""
    }])

    const addLocationField = (e) => {
        e.preventDefault()
        setLocation([...location, {
            each: ""
        }])
    }
    
    const removeLocationField= (event, index) => {
        event.preventDefault()
        const rows= [...location]
        rows.splice(index, 1)
        setLocation(rows)
    }
    
    const handleLocation= (index, event) => {
        event.preventDefault()
        const {value}= event.target
        
        const list= [ ...location]
        list[index]["each"]= value
        console.log(location)
        location.filter((loc)=> {
            console.log(loc.each)
        })
        setLocation(list)
    }

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
    
    
    const [disciplines, setDisciplines]= useState([{
        discipline:""
    }])

    const addDisciplineField = (e) => {
        e.preventDefault()
        setDisciplines([...disciplines, {
            discipline: ""
        }])
    }
    
    const removeDisciplineField= (event, index) => {
        event.preventDefault()

        const rows= [...disciplines]
        rows.splice(index, 1)
        setDisciplines(rows)
    }
    
    const handleDiscipline= (index, event) => {
        event.preventDefault()

        const {value}= event.target
        
        const list= [ ...disciplines]
        list[index]["discipline"]= value
        setDisciplines(list)
        console.log(disciplines)
    }


    const [overview, setOverview]= useState("")
    // const [programmestructure, setProgrammestructure]= useState([])

    const [programmestructure, setProgrammestructure]= useState([{
        points:""
    }])

    const addProgrammeField = (e) => {
        e.preventDefault()
        setProgrammestructure([...programmestructure, {
            points: ""
        }])
    }
    
    const removeProgrammeField= (index, event) => {
        event.preventDefault()
        const rows= [...programmestructure]
        rows.splice(index, 1)
        setProgrammestructure(rows)
    }
    
    const handleProgramme= (index, event) => {
        event.preventDefault()

        const {value}= event.target
        
        const list= [ ...programmestructure]
        list[index]["points"]= value
        setProgrammestructure(list)
        console.log(programmestructure)
    }



    const [acadrequirements, setAcadrequirements]= useState(" ")
    const [engrequirements, setEngrequirements]= useState([{
        req: ""
    },
    {
        req: ""
    }])

    const handeIELTS= (event) => {
        event.preventDefault()

        const {value}= event.target

        const list= [...engrequirements]

        list[0]["req"]= value
        setEngrequirements(list)



    }

    const handeTOEFL= (event) => {
        event.preventDefault()

        const {value}= event.target

        const list= [...engrequirements]

        list[1]["req"]= value
        setEngrequirements(list)
    }

    // const [otherrequirements, setOtherrequirements]= useState([])

    const [otherrequirements, setOtherrequirements]= useState([{
        other:""
    }])

    const addOtherField = (e) => {
        e.preventDefault()

        setOtherrequirements([...otherrequirements, {
            other: ""
        }])
    }
    
    const removeOtherField= (index, event) => {
        event.preventDefault()

        const rows= [...otherrequirements]
        rows.splice(index, 1)
        setOtherrequirements(rows)
    }
    
    const handleOther= (index, event) => {
        event.preventDefault()

        const {value}= event.target
        
        const list= [ ...otherrequirements]
        list[index]["other"]= value
        setOtherrequirements(list)
        console.log(otherrequirements)
    }

    const [cost, setCost]= useState()

    const handleSubmit= (e) => {
        e.preventDefault()
        console.log({
            name, 
            degree,
            university,
            website,
            location,
            fees,
            duration,
            fulltime,
            campus,
            about,
            rating,
            ranking,
            credits,
            language,
            start,
            apply,
            disciplines,
            overview,
            programmestructure,
            acadrequirements,
            engrequirements,
            otherrequirements,
            cost
        })
        postDegree({
            name, 
            degree,
            university,
            website,
            location,
            fees,
            duration,
            fulltime,
            campus,
            about,
            rating,
            ranking,
            credits,
            language,
            start,
            apply,
            disciplines,
            overview,
            programmestructure,
            acadrequirements,
            engrequirements,
            otherrequirements,
            cost
        })
    }

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

                <form onSubmit={handleSubmit}>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Name of the study" onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Degree" onChange={(e)=>setDegree(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="University" onChange={(e)=>setUniversity(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Website" onChange={(e)=>setWebsite(e.target.value)} />
                    </div>


                    {
                        location.map((data, index)=> {
                            const { each }= data
                            return(
                                <div>
                                    <input type="text" 
                                    onChange={(event)=> handleLocation(index, event)} 
                                    value={each} 
                                    name={location}
                                    placeholder="Location" />
                                    <div className="col">
                                        {(location.length!==1)? <button className="btn btn-outline-danger" onClick={removeLocationField}>Remove</button>:''}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-sm-12">
                            <button style={{marginBottom: "20px"}}  onClick={addLocationField}>Add New</button>
                        </div>
                    </div>


                    
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Fees" onChange={(e)=>{
                            setFees(e.target.value)
                            }} />
                    </div>

                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Duration" onChange={(e)=>setDuration(e.target.value)} />
                    </div>

                    <div>
                        <input style={{marginBottom: "20px"}}  type="radio" id="contactChoice2" name="Full time" value={true} onClick={(e)=> setFulltime(true)} />
                        <label for="Full-time">Full-time</label>

                        <input type="radio" id="contactChoice3" name="Part time" value={false} onClick={(e)=> setFulltime(false)} />
                        <label for="Part-time">Part-time</label>
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="On Campus or Off Campus" onChange={(e)=>setCampus(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="About" onChange={(e)=>setAbout(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Rating" onChange={(e)=>{
                            setRating(e.target.value) 
                            }} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Ranking" onChange={(e)=>setRanking(e.target.value)} />
                    </div>

                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Credits" onChange={(e)=>setCredits(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Language" onChange={(e)=>setLanguage(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Start Month" onChange={(e)=>setStart(e.target.value)} />
                    </div>
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Apply Month" onChange={(e)=>setApply(e.target.value)} />
                    </div>


                    {
                        disciplines.map((data, index)=> {
                            const { discipline }= data
                            return(
                                <div>
                                    <input type="text" 
                                    onChange={(event)=> handleDiscipline(index, event)} 
                                    value={discipline} 
                                    name={disciplines}
                                    placeholder="Discipline" />
                                    <div className="col">
                                        {(disciplines.length!==1)? <button className="btn btn-outline-danger" onClick={removeDisciplineField}>Remove</button>:''}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-sm-12">
                            <button style={{marginBottom: "20px"}} className="btn btn-outline-success " onClick={addDisciplineField}>Add New</button>
                        </div>
                    </div>







                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Overview" onChange={(e)=>setOverview(e.target.value)} />
                    </div>
                    
                    
                    {
                        programmestructure.map((data, index)=> {
                            const { points }= data
                            return(
                                <div>
                                    <input type="text" 
                                    onChange={(event)=> handleProgramme(index, event)} 
                                    value={points} 
                                    name={programmestructure}
                                    placeholder="Programme Structure" />
                                    <div className="col">
                                        {(programmestructure.length!==1)? <button className="btn btn-outline-danger" onClick={removeProgrammeField}>Remove</button>:''}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-sm-12">
                            <button style={{marginBottom: "20px"}} className="btn btn-outline-success " onClick={addProgrammeField}>Add New</button>
                        </div>
                    </div>





                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Academic Requirements" onChange={(e)=>setAcadrequirements(e.target.value)} />
                    </div>
                    
                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="IELTS" onChange={(e)=>handeIELTS(e)} />
                    </div>

                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="TOEFL" onChange={(e)=>handeTOEFL(e)} />
                    </div>

                    
                    {
                        otherrequirements.map((data, index)=> {
                            const { other }= data
                            return(
                                <div>
                                    <input type="text" 
                                    onChange={(event)=> handleOther(index, event)} 
                                    value={other} 
                                    name={otherrequirements}
                                    placeholder="Other requirements" />
                                    <div className="col">
                                        {(otherrequirements.length!==1)? <button className="btn btn-outline-danger" onClick={removeOtherField}>Remove</button>:''}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-sm-12">
                            <button style={{marginBottom: "20px"}} className="btn btn-outline-success " onClick={addOtherField}>Add New</button>
                        </div>
                    </div>
                    



                    <div>
                        <input style={{marginBottom: "20px"}} placeholder="Cost" onChange={(e)=>setCost(e.target.value)} />
                    </div> 
                    <div>
                        <button type="submit" >Submit</button>
                    </div>   
                </form>
               
            </div>
        </>
    )
}

export default Admin