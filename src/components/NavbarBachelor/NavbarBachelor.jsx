import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarBachelor.css";
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'


const NavbarBachelor= () => {
    const navigate= useNavigate();

  return (
    <>
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
                <input  type="text" placeholder="Search Studyportals" name="search" />
                <input style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} type="text" placeholder="Search Studyportals" name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
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
    </>
  );
}

// fa fa-comment-o

export default NavbarBachelor;