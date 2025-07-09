import { ITEM_URL } from "../utils/Constant";
const ItemDtls = (props)=>{
    const itemCards = props.itemCards;
    return (
        itemCards.map((obj) => (
            <div className="flex justify-between items-center border-t-2 min-h-36 border-amber-200" key={obj?.card?.info?.id}>
                <div className="p-2" >
                    <h4 className="mt-1">{obj?.card?.info?.name}</h4>
                    <h5 className="mt-1">Rs. {obj?.card?.info?.price / 100 || obj?.card?.info?.defaultPrice / 100}</h5>
                    {obj?.card?.info?.ratings?.aggregatedRating?.rating && (
                        <h5 className="mt-1">⭐️ {obj.card.info.ratings.aggregatedRating.rating}</h5>
                    )}
                    <p className="mt-1">{obj?.card?.info?.description}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-45 h-32 min-w-45 rounded-xl" alt="item image" src={ITEM_URL + obj?.card?.info?.imageId}></img>
                </div>
            </div>
        ))
    )
}
export default ItemDtls;