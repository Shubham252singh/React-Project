import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemDtls from "./ItemDtls"
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const menuDtls=useRestaurantMenu(resId);

    if(menuDtls ===null){
        return <Shimmer/>
    }
    const {name,avgRating,cuisines,sla,costForTwoMessage,totalRatingsString}=menuDtls[2]?.card?.card?.info;
    const {offers}=menuDtls[3]?.card?.card?.gridElements?.infoWithStyle;
    const itemCards =menuDtls[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || menuDtls[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    return (<div>
        <h1>{name}</h1>
        <div className ="restDtls">
            <h3>⭐️ {avgRating} {"("+totalRatingsString+")"} {costForTwoMessage}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{sla.minDeliveryTime+" - "+sla.maxDeliveryTime} mins</h3>
        </div>
        <h2>Deals for you</h2>
        <div className ="resOffer">
            {offers.map((obj)=>(
                <div className = "offerItem" key={obj.info.offerIds[0]}>
                <h3>{obj.info.header}</h3>
                <h3>{obj.info.couponCode || obj.info.description}</h3>
                </div>))}
        </div>
        <div className="recommendItem">
            <h3>Recommended {"("+ itemCards.length +")"}</h3>
            <ItemDtls itemCards = {itemCards}/>
        </div>
    </div>);
}
export default RestaurantMenu;