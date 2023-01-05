import { useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate= useNavigate()
    const [dropdown0, setDropdown0] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    const [dropdown6, setDropdown6] = useState(false);

    return (
        <>
            <div className="footer">
                <div className="footer-item" >
                    <h3 style={{paddingBottom: "30px"}} >SITEMAP</h3>
                    <ul className="sitemap">
                    <li>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <a href="#">About</a>
                                <div className="triangle_down"></div>
                            </div>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li>
                                        <a href="#">Team</a>
                                    </li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li >
                            <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                                <a href="#">For Students</a>
                                <div className="triangle_down"></div>
                            </div>
                        <div className="dropdown-menu">
                                <ul>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li>
                                    <a href="#">Team </a>
                                </li>
                                <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <a href="#">For Institutions</a>
                            <div className="triangle_down"></div>
                        </div>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li>
                                        <a href="#">Team </a>

                                    </li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <a href="#">Careers</a>
                                <div className="triangle_down"></div>
                            </div>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li>
                                        <a href="#">Team </a>
                                    </li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <a href="#">News & Insights</a>
                                <div className="triangle_down"></div>
                            </div>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li>
                                        <a href="#">Team </a>

                                    </li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                                <a href="#">Initiatives</a>
                                <div className="triangle_down"></div>
                            </div>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li>
                                        <a href="#">Team </a>

                                    </li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </li>
                            <li className="sitemap-item">
                            <form className="example">
                                <input type="text" placeholder="Search Studyportals" name="search" />
                                <button type="submit">Search</button>
                            </form>
                            </li>
                </ul>
                </div>
                <div className="footer-item" >
                    <h3 style={{paddingBottom: "30px"}} >OUR PORTALS</h3>
                    <ul className="sitemap">
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Bachelorsportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Masterssportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            PhDportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Shortcoursesportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Distancelearningportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Scholarshipportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Admissiontestportal.com
                        </li>
                        <li
                        className="sitemap-item"
                        onClick={() => setDropdown5(!dropdown5)}
                        >
                            Englishtestportal.com
                        </li>
                    </ul>
                </div>
                <div className="footer-item" >
                    <h3 style={{paddingBottom: "30px"}}>SERVICES</h3>
                    <ul className="sitemap">
                        <li className="sitemap-item">
                            <a>University Administration</a>
                        </li>
                        <li className="sitemap-item">
                            <a>Register your university</a>
                        </li>
                        <li className="sitemap-item">
                            <div>
                                Follow us on: in t i f
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer