import { useState, useEffect } from "react"
import Card from "../../components/Card/Card"
import "./Bachelor.css"
import axios from "axios"
import { getAllDegrees } from "../../redux/apiCalls"
import Spin from "../../animation/Spin"
import NavbarBachelor from "../../components/NavbarBachelor/NavbarBachelor"
import { Link, useLocation, useNavigate } from "react-router-dom"
import $ from "jquery"
import "jquery-ui-dist/jquery-ui"
import { publicRequest } from "../../requestMethods"


const Bachelor = () => {
    const navigate= useNavigate()
    const location= useLocation()
    const searchquery= location.pathname.split("/")[2]
    // console.log(searchquery)
    const [ data, setData ]= useState([])
    const [ loading, setLoading ]= useState(true)

    useEffect(()=> {
        const getData= async () => {
            try {

                if (searchquery) {
                    const res=  await publicRequest.get(`/degree?search=${searchquery}`)
                    setData(res)
                    setLoading(false)
                }
                else {
                    const res= await getAllDegrees()
                    setData(res)
                    setLoading(false)

                }
            }catch(err) {

            }
        }
        getData()
    },[])
    
    const [ what, setWhat ]= useState("")
    const [ where, setWhere ]= useState("")

    useEffect(() => {
        // console.log(what)
        $( function() {
            $("#what").autocomplete({
                source: async function(req, res) {
                    try {
                        if (what!=="") {
                            const result= await publicRequest.post("/degree/autocomplete", { what})
                            console.log(result.data)
                            res(result.data)
                        }
                        // const result= await axios.get("https://rmc.onrender.com/api/")
                    } catch(err) {
                        console.log(err)
                    }
                },
                minLength: 1,
                select: function(event, ui) {
                    console.log(ui)
                    if (ui.item) {
                        $("#what").val(ui.item.label)
                        console.log(ui.item)
                        navigate(`/studies/${ui.item.id}`)
                    }
                }
            })
        })
    }, [what])
    useEffect(() => {
        console.log(where)
        $( function() {
            $("#where").autocomplete({
                source: async function(req, res) {
                    try {
                        if (where!=="") {
                            const result= await publicRequest.post("/degree/autocomplete", { where })
                            console.log(result.data)
                            return res(result.data)
                        }
                        // const result= await axios.get("https://rmc.onrender.com/api/")
                    } catch(err) {
                        console.log(err)
                    }
                },
                minLength: 1,
                select: function(event, ui) {
                    console.log(ui)
                    if (ui.item) {
                        $("#where").val(ui.item.label)
                    }
                }
            })
        })
    }, [where])


    const handleSearch= (e) => {
        navigate(`/bachelor/`)
    }


    return (
        <>
            {/* <NavbarBachelor /> */}
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" className="navbar-logo">
                        studyportals
                    </Link>
                </div>
                <div className="nav-btns">
                    <div style={{display: "flex", height: "100%", flex: "1", alignItems: "center", justifyContent: "center"}}>
                        <i className="fa fa-compass" style={{fontSize: "30px", paddingRight: "5px", display: "flex", height: "100%", alignItems: "center", justifyContent: "center"}}></i>
                        <p style={{fontWeight: "300", display: "flex", height: "100%", alignItems: "center", justifyContent: "center"}}>Explore</p>
                    </div>
                    <div style={{display: "flex", flex: "1", alignItems: "center", justifyContent: "center"}}>
                        <i className="fa fa-bullseye" style={{fontSize: "30px", paddingRight: "5px"}}></i>
                        <p style={{fontWeight: "300"}}>Decide</p>
                    </div>
                    <div style={{display: "flex", flex: "1", alignItems: "center", justifyContent: "center"}}>
                        <i className="fa fa-paper-plane-o" style={{fontSize: "25px", paddingRight: "5px"}}></i>
                        <p style={{fontWeight: "300"}}>Apply</p>
                    </div>
                </div>
                <div className="nav-search">
                    <form className="example">
                        <input id="what" type="text" placeholder="What to study?" name="search" onChange={(e)=>setWhat(e.target.value)} />
                        <input id="where" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} type="text" placeholder="Where to study?" name="search" onChange={(e)=>setWhere(e.target.value)} />
                        <button onClick={handleSearch}><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="nav-user">
                    <div style={{display: "flex",alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        <i className="fa fa-heart-o" style={{fontSize: "25px"}}></i>
                        <p style={{fontWeight: "300", fontSize: "13px"}}>Wishlist</p>
                    </div>
                    <div style={{display: "flex",alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <i className="fa fa-comment-o" style={{fontSize: "25px"}}></i>
                    <p style={{fontWeight: "300", fontSize: "13px"}}>Chat</p>
                    </div>
                    <div style={{display: "flex",alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                        <i className="fa fa-user-o" style={{fontSize: "25px"}}></i>
                        <p style={{fontWeight: "300", fontSize: "13px"}}>Login</p>
                    </div>
                </div>
            </nav>
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
                {/* <script>
                    $( function() {
                        $("#what").autocomplete({
                            source: async function(req, res) {
                                try {
                                    const result= await axios.get("https://rmc.onrender.com/api/autocomplete/")
                                } catch(err) {

                                }
                            }
                        })
                    })
                </script> */}
        </>
    )
}

export default Bachelor