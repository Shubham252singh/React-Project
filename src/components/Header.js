import { LOGO_URL } from "../utils/Constant";
import {useState} from 'react';
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStaus";
import {useContext} from "react"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [loginbutton , setlogin]=useState("Login");
    const onlineStatus = useInternetStatus();
    const {login_name} = useContext(UserContext);
    const cartItems =useSelector((store)=>store.cart.items);

    return (
        <div className="flex m-2 p-1 justify-between items-center h-20 bg-pink-100 shadow-2xl">
            <div className=" bg-pink-100 p-2 rounded-md">
                <img className ="w-24" src={LOGO_URL}></img>
            </div>
            <div className="navigaionCont">
                <ul className="flex mx-4">
                    <li className ="px-6">{onlineStatus?"Online 🟢":"Offline 🔴"}</li>
                    <li className ="px-6 hover:font-semibold"><Link to="/">Home</Link></li>
                    <li className ="px-6 hover:font-semibold"><Link to = "/about">About</Link></li>
                    <li className ="px-6 hover:font-semibold"><Link to = "/contact">Contact</Link></li>
                    <li className ="px-6 hover:font-semibold"><Link to = "/grocery">Grocery</Link></li>
                    <li className ="px-6 hover:font-semibold"><Link to = "/cart" data-testid="cartLinkHeader">Cart {cartItems.length > 0 && <span className = " bg-green-400 text-white px-1 py-0.5 text-sm">{cartItems.length}</span>}</Link></li>
                    <li className ="px-6 hover:font-semibold"><button className="loginbtn" onClick = {()=>{
                        if(loginbutton =="Login"){
                            setlogin("Logout");
                        }
                        else{
                            setlogin("Login");
                        }
                    }}>{loginbutton}</button> </li>
                    <li className ="px-6 hover:font-semibold">{login_name}</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;