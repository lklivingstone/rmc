import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./NavbarHome.css";
import { useNavigate } from 'react-router-dom';
import Button from "./Button"

const NavbarHome = () => {
    const navigate= useNavigate();


    return (
        <>
            <div className="menu-bar">
                <div className="flex-2">
                    <h1 className="logo">study<span>portals</span></h1>
                </div>
                <div className="flex-4">
                    <ul>
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
                    </ul>
                </div>
                {/* <div className="flex-1"> */}
                    {/* <Button /> */}
                {/* </div> */}
                <Link to="signup">
                    <button className="bttn">Contact</button>
                </Link>
            </div>
        </>
    )
}

export default NavbarHome