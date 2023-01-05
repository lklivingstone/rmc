import { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import "./Bachelor.css"
import axios from "axios"
import { getAllDegrees } from "../../redux/apiCalls"
import Spin from "../../animation/Spin"
import NavbarBachelor from "../../components/NavbarBachelor/NavbarBachelor"
import { Link } from "react-router-dom"


const Bachelor = () => {
    
    const [ data, setData ]= useState([])
    const [ loading, setLoading ]= useState(true)

    useEffect(()=> {
        const getData= async () => {
            try {
                const res= await getAllDegrees()
                setData(res)
                setLoading(false)
            }catch(err) {

            }
        }
        getData()
    },[])

    return (
        <>
            <NavbarBachelor />
            <div className="heading">
                    <h1  >Bachelor's degrees from all around the world</h1>
                    <p style={{paddingBottom: "10px", paddingTop: "10px"}}>{data?.length} Bachelors</p>
                </div>
                <div className="sub-main">
                    <div className="left">
                        <div className="filter-card">
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                                <div style={{width: "90%", backgroundColor: "rgb(215, 215, 215)", height: "0.5px", position: "absolute", bottom: "0px"}}></div>
                            </div>
                            <div className="each-filter">
                                
                                <i style={{paddingRight: "10px"}} className="fa fa-file-code-o"></i>
                                <p>Discipline</p>
                                <i style={{position: "absolute", right: "10px"}} className="fa fa-sort-down"></i>
                            </div>
                        </div>
                    </div>
                    {loading && <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "70vh", width: "100vw"}}>
                        <Spin />
                    </div>}
                    <div className="right">
                        {
                            data.map((single)=> (
                                <Link key={single._id} style={{textDecoration: "none", color: "inherit"}} to={`/studies/${single._id}`}>
                                    <Card  name={single.name} about={single.about} fees={single.fees} duration={single.duration} fulltime={single.fulltime} degree={single.degree} campus={single.campus} university={single.university} location={single.location} />                   
                                </Link>
                            ))
                        }
                    </div>
                </div>
        </>
    )
}

export default Bachelor