import Restaurant_card, { withPromotedLabel } from "./RestaurantCard";
import { useState , useEffect} from 'react';
import{Link} from 'react-router-dom'
import Shimmer from "./Shimmer";
import useInternetStatus from "../utils/useInternetStaus";

const Body = ()=>{
    const [resList,setresList]=useState([]);
    const [filter_restaurant,setfilter_restaurant]=useState([]);
    const [srchtxt,setsrchtxt]=useState("");
    const Restaurant_Card_Promoted = withPromotedLabel(<Restaurant_card/>)
    useEffect(()=>{fetchdata();},[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.34260&lng=85.30990&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilter_restaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useInternetStatus();
    if(onlineStatus == false){
        return <h1>Internet is Down🛜</h1>
    }
    if(filter_restaurant.length ===0){
        return <Shimmer/>;    
    }
    return(
        <div className="body_Cont">
            <div className="flex m-4">
                <input className ="m-2 px-4 border-2 border-solid  focus:border-blue-400 focus:outline-none focus:ring-0 " type="text" placeholder="Search Restaurants" value = {srchtxt} onChange={(e)=>{
                    setsrchtxt(e.target.value);
                }}/>
                <button className ="m-2 px-2 bg-blue-300 border-2 border-black rounded-lg text-amber-50" onClick = {()=>{
                    const fikter_resList= resList.filter((res)=>res.info.name.toLowerCase().includes(srchtxt.toLowerCase()));
                    setfilter_restaurant(fikter_resList)
                }}>Search</button>
                <button className ="m-2 px-2 bg-blue-300 border-2 rounded-lg  border-black text-amber-50" onClick = {()=>{
                    const testo= resList.filter((obj)=>obj.info.avgRating>4.3);
                    setfilter_restaurant(testo);
                }}>Top Rated Restaurant Search</button>
            </div>
            <div className="flex flex-wrap  justify-start gap-4">{
                filter_restaurant.map((obj)=><Link key = {obj.info.id} to = {"/restaurant/"+ obj.info.id}>
                       {obj.info.avgRating > 4.5?(<Restaurant_Card_Promoted resData = {obj.info} />):(<Restaurant_card resData = {obj.info}/>)}
                    </Link>)}
            </div>
        </div>
    );
}

export default Body;