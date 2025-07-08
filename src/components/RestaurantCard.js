import { ITEM_URL } from "../utils/Constant";
const Restaurant_card =(props)=>{
    const {resData}=props;
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId,sla}=resData;
    return(
    <div className = "m-6 overflow-hidden w-60 text-center bg-gray-100 h-100 hover:shadow-2xl hover:bg-gray-200">
        <img className ="w-60 h-44 rounded-lg"alt ="item image"src={ITEM_URL+cloudinaryImageId}></img>
        <h3 className ="pt-1 font-bold">{name}</h3>
        <h5 className ="pt-1">Cusine - {cuisines.join(", ")}</h5>
        <h5 className ="pt-1">Rating {avgRating}</h5>
        <h5 className ="pt-1">Price {costForTwo.split(' ')[0]}</h5>
        <h6 className ="pt-1">{sla.deliveryTime} min</h6>   
    </div>
)}
export default Restaurant_card;