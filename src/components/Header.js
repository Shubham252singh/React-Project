import { LOGO_URL } from "../utils/Constant";
import {useState} from 'react';
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStaus";
const Header = ()=>{
    const [loginbutton , setlogin]=useState("Login");
    const onlineStatus = useInternetStatus();
    return (
        <div className="header">
            <div className="logoCont">
                <img className ="logo" src={LOGO_URL}></img>
            </div>
            <div className="navigationCont">
                <ul className="navigationList">
                    <li>{onlineStatus?"Online 🟢":"Offline 🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li><button className="loginbtn" onClick = {()=>{
                        if(loginbutton =="Login"){
                            setlogin("Logout");
                        }
                        else{
                            setlogin("Login");
                        }
                    }}>{loginbutton}</button> </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;