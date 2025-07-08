import {useState,useEffect} from "react";
import { Menu_URL } from "./Constant";
const useRestaurantMenu = (resId)=>{
    const [resMenuDtls,setresMenuDtls]=useState(null);
    useEffect(()=>{fetchData();},[]);
    const fetchData = async ()=>{
        const data = await fetch(Menu_URL+resId);
        const json = await data.json();
        //console.log(json.data);
        setresMenuDtls(json?.data?.cards);
    }
    return resMenuDtls;
}
export default useRestaurantMenu;