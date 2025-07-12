import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemDtls from "./ItemDtls"
import ItemList from "./ItemList";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const menuDtls=useRestaurantMenu(resId);
    if(menuDtls ===null){
        return <Shimmer/>
    }
    const {name,avgRating,cuisines,sla,costForTwoMessage,totalRatingsString}=menuDtls[2]?.card?.card?.info;
    const {offers}=menuDtls[3]?.card?.card?.gridElements?.infoWithStyle;
    const itemCards =menuDtls[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards || menuDtls[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    const itemlists = menuDtls[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = itemlists.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (<div className="ml-2 p-2">
        <h1 className="text-4xl m-4 font-semibold">{name}</h1>
        <div className ="border-2 border-amber-100 shadow-xl h-34 p-3 mb-6 rounded-3xl">
            <h3 className="m-2">⭐️ {avgRating} {"("+totalRatingsString+")"} {costForTwoMessage}</h3>
            <h3 className="m-2">{cuisines.join(",")}</h3>
            <h3 className="m-2">{sla.minDeliveryTime+" - "+sla.maxDeliveryTime} mins</h3>
        </div>
        <h2 className="my-4 mx-2 text-xl">Deals for you:</h2>
        <div className ="flex flex-wrap justify-between min-h-12 mx-2 overflow-x-auto">
            {offers.map((obj)=>(
                <div className = "border-2 w-50 h-20 p-3 text-center bg-amber-50 rounded-3xl" key={obj.info.offerIds[0]}>
                <h3>{obj.info.header}</h3>
                <h3>{obj.info.couponCode || obj.info.description}</h3>
                </div>))}
        </div>
        <div className="my-4 mx-2">
              {categories.map((obj)=><ItemList key={obj?.card?.card?.title} items = {obj}/>)}
        </div>    
    </div>);
}
export default RestaurantMenu;