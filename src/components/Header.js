
import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{

    const [btnName, setBtnName]= useState("login");
    return(
    <div className = "header">
        <div className = "logo-container">
            <img className="logo" src = "/logo-image.jpeg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About Us</Link></li>
                <li><Link to = "/contact">Contact US</Link></li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                    btnName==="login"?setBtnName("logout"):setBtnName("login");  
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    );
}

export default Header;