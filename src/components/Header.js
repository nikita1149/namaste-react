
import { LOGO_URL } from "../utlis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
const Header=()=>{

    const [btnName, setBtnName]= useState("login");
    const onlineStatus = useOnlineStatus();
    return(
    <div className = "header">
        <div className = "logo-container">
            <img className="logo" src = "/logo-image.jpeg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About Us</Link></li>
                <li><Link to = "/contact">Contact US</Link></li>
                <li><Link to = "/grocery">Grocery</Link></li>
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