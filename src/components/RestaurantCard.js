import { ITEM_URL } from "../utils/Constant";
const Restaurant_card =(props)=>{
    const {resData}=props;
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId,sla}=resData;
    return(
    <div className = "res_cardCont">
        <img className ="card_img"alt ="item image"src={ITEM_URL+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h4>Cusine - {cuisines.join(", ")}</h4>
        <h4>Rating {avgRating}</h4>
        <h5>Price {costForTwo.split(' ')[0]}</h5>
        <h6> {sla.deliveryTime} min</h6>   
    </div>
)}
export default Restaurant_card;