import NavbarBachelor from "../../components/NavbarBachelor/NavbarBachelor"
import "./Study.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getDegree } from "../../redux/apiCalls"
import Spin from "../../animation/Spin"


const Study = () => {

    const location= useLocation()

    const id= location.pathname.split("/")[2]

    const [ deg, setDeg ]= useState({})
    const [ loading, setLoading ]= useState(true)

    const [univLocation, setUnivLocation] = useState("")
    useEffect(() => {
        const findDegree= async () => {
            try {
                const res= await getDegree(id)
                setDeg(res)

            } catch (err) {

            }
        }
        findDegree()
    }, [])

    const [ ielts, setIELTS ]= useState()
    const [ toefl, setTOEFL ]= useState()

    useEffect(()=> {

        deg?.location?.map((item)=> {
            setUnivLocation(univLocation+" "+item.each)
        })
        deg?.engrequirements?.map((item, key)=> {
            if (key===0) {
                setIELTS(deg?.engrequirements[0]?.req)
            }
            if (key===1) {
                setTOEFL(deg?.engrequirements[1]?.req)
            }
        })
        // if (deg) {
        //     setTOEFL(deg?.engrequirements[1]?.req)
        // }
        console.log(deg.engrequirements)

        setLoading(false)
    }, [deg])

    const [option, setOption ]= useState("key")

    let acadreq=" "

    return (
        <>
            <NavbarBachelor />
            {loading && <div style={{height: "60vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Spin />
            </div>}
            <div className="img-div">
                <img src={require("../../data/EU_Business.jpg")} className="bg-img" />            
            </div>
            <div className="info-card">
                <div className="info">
                    <div className="info-border">
                        {/* <p> */}
                        {deg.degree}
                        {/* </p> */}
                    </div>
                    <div className="info-border">
                        {/* <p> */}
                        {deg.campus}
                        {/* </p> */}
                    </div>
                </div>
                <div className="university">
                    <p>{deg.university}</p>
                </div>
                <div className="degree">
                    <h2>
                        {deg.name}
                    </h2>
                </div>
                <div className="programme-btn">
                    <button className="courses-btn" >Search Short Courses</button>
                </div>
            </div>

            <div className="second-card">
                <div className="flex-1">
                    <div style={{display:"flex"}}>
                        <i className="fa fa-clock-o" style={{fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "5px"}}></i>
                        <h3 style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0", fontSize:"22px"}} >{deg.duration} years</h3>
                    </div>
                    <h4 style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0", fontWeight: "400", fontSize:"15px"}}>Duration</h4>
                </div>
                <div className="flex-1">
                <div style={{display:"flex"}}>
                        <i className="fa fa-clock-o" style={{fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "5px"}}></i>
                        <h3 style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0", fontSize:"22px"}} >{deg.fees} EUR/year</h3>
                    </div>
                    <h4 style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0", fontWeight: "400", fontSize:"15px"}}>Tuition fees</h4>

                </div>
                <div className="flex-1">
                    <div style={{display:"flex"}}>
                        <i className="fa fa-clock-o" style={{fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "5px"}}></i>
                        <h3 style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0", fontSize:"22px"}} >Anytime</h3>
                    </div>
                    <h4 style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0", fontWeight: "400", fontSize:"15px"}}>Apply time</h4>
                </div>
                <div className="flex-1">
                <div style={{display:"flex"}}>
                        <i className="fa fa-clock-o" style={{fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "5px"}}></i>
                        <h3 style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0", fontSize:"22px"}} >{deg.start}</h3>
                    </div>
                    <h4 style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", margin: "0", fontWeight: "400", fontSize:"15px"}}>Start date</h4>
                </div>
            </div>

            <div style={{width: "100%"}}>
                <div className="about">
                    <div className="about-div">
                        <h3>About</h3>
                        <p style={{fontSize:"15px"}} >{deg.about}</p>
                    </div>
                    <div className="third-card">
                        <h2 style={{fontSize:"20px"}}>{deg.university}</h2>
                        <h4 style={{fontSize:"20px"}}>Rating: {deg.rating}/5</h4>
                        <h3 style={{fontSize:"20px"}}>Location: {univLocation}</h3>
                        {/* {deg && (
                            deg.location?.map((item)=> {
                                <h3>{item.each}</h3>
                            })
                        )} */}
                            {/* {deg?.location?.map((item)=> {
                                <h3>{item.each}</h3>
                            })} */}
                    </div>
                </div>
            </div>

            <div style={{width: "100%", display: "flex"}}>
                <div style={{flex:2, width: "100%", display: "flex", justifyContent: "flex-end", padding: "20px"}} >
                    <ul style={{lineHeight: "40px", listStyle: "none", textAlign: "right"}} >
                        <li onClick={()=> setOption("key")} style={{ cursor: "pointer", color: "blue"}} >Key information</li>
                        <li onClick={()=> setOption("overview")} style={{ cursor: "pointer", color: "blue"}} >Overview</li>
                        <li onClick={()=> setOption("programme")} style={{ cursor: "pointer", color: "blue"}} >Programme structure</li>
                        <li onClick={()=> setOption("admission")} style={{ cursor: "pointer", color: "blue"}} >Admission requirements</li>
                        <li onClick={()=> setOption("fees")} style={{ cursor: "pointer", color: "blue"}} >Fees and funding</li>
                        <li onClick={()=> setOption("work")} style={{ cursor: "pointer", color: "blue"}} >Work permit</li>
                    </ul>
                </div>
                {
                    option ==="key" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Key information</h2>

                            <h5 className="sub-heading" >Duration</h5>
                            
                            {deg.fulltime && <p>Full-time</p>}
                            {!deg.fulltime && <p>Part-time</p>}
                            <p>{deg.duration*12}</p>
                            
                            <h5 className="sub-heading" >Start dates & application deadlines</h5>
                            <p>Starting {deg.start}</p>
                            <p className="sub-p">Apply anytime</p>
                            <p>Starting {deg.apply}</p>
                            <p className="sub-p">Apply anytime</p>

                            <h5>Language</h5>
                            <p>English</p>
                            <p>IELTS : {ielts}</p>
                            <p>TOEFL : {toefl}</p>

                            <h5>Credits</h5>
                            <p>{deg.credits}</p>

                            <h5>Delivered</h5>
                            <p>{deg.campus}</p>

                            
                            <h5>Disciplines</h5>
                            <ul>
                            {deg?.disciplines?.map((item, key)=> {
                                return (<li key={key}>{item.discipline}</li>)
                            })}

                            </ul>
                        </div>
                    </div>)
                }
                {
                    option ==="overview" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Overview</h2>

                            <p>{deg.overview}</p>
                            
                            {/* <h5 className="sub-heading" >Career Options</h5>
                            
                            <p>The Bachelor of Arts in Digital Business, Design & Innovation degree provides students with business knowledge and specialist skills particularly in the digital area. Specialist subjects include digital leadership and digital transformation. Students who successfully complete this degree may be interested in the following job positions:</p> */}

                            
                        </div>
                    </div>)
                }
                {
                    option ==="programme" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Programme Structure</h2>
                            
                            <h5 className="sub-heading" >Courses include:</h5>
                            <ul>
                                {deg?.programmestructure?.map((item, key)=> {
                                    return (<li key={key}>{item.points}</li>)

                                })}
                            </ul>                            
                        </div>
                    </div>)
                }
                {
                    option ==="admission" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Academic requirements</h2>
                            {deg.acadrequirements===" " ? (
                                <p>We are not aware of any academic requirements for this programme.</p>
                            ) : (
                                <p>{deg.acadrequirements}</p>
                            )
                            }
                            <h2>English requirements</h2>
                            <p>IELTS : {ielts}</p>
                            <p>TOEFL : {toefl}</p>

                            <h2>Other requirements</h2>
                            <h5 className="sub-heading" >General requirements</h5>                        
                            <ul>
                                {deg?.otherrequirements?.map((item, key)=> {
                                    return (<li key={key}>{item.other}</li>)
                                })}
                            </ul>

                        </div>
                    </div>)
                }
                {
                    option ==="fees" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Academic requirements</h2>
                            <p>Below are the tuition fees for students from India</p>
                            <h5>International</h5>
                            <p>{deg?.fees} EUR/year</p>
                            <p className="sub-p">Tuition Fee</p>

                            <h5>Living costs</h5>
                            <p>{deg?.cost} EUR/year</p>
                            <p className="sub-p">Living costs</p>

                            <p>The living costs include the total expenses per month, covering accommodation, public transportation, utilities (electricity, internet), books and groceries.</p>
                        </div>
                    </div>)
                }
                {
                    option ==="work" && (
                    <div style={{flex:4, padding: "20px"}} >
                        <div className="keyinfo">
                            <h2>Work Permits</h2>
                            <h5>Work while studying in Germany</h5>
                            <p>If you’re from India, you will need a work permit if you want to combine studying with working in Germany. Here you see the rules for getting a part-time work permit. If you are a full-time student you do not need an official document to work part-time in Germany.</p>   
                            </div>
                    </div>)
                }
            </div>

            <Footer />
        </>
    )
}

export default Study