import { ITEM_URL } from "../utils/Constant";
const ItemDtls = (props)=>{
    const itemCards = props.itemCards;
    return (
        itemCards.map((obj) => (
            <div className="recItem" key={obj?.card?.info?.id}>
                <div className="recItemDtls" >
                    <h4>{obj?.card?.info?.name}</h4>
                    <h5>Rs. {obj?.card?.info?.price / 100 || obj?.card?.info?.defaultPrice / 100}</h5>
                    <h5>⭐️{obj?.card?.info?.ratings?.aggregatedRating?.rating}</h5>
                    <p>{obj?.card?.info?.description}</p>
                </div>
                <div className="recItemImg">
                    <img className="itemImg" alt="item image" src={ITEM_URL + obj?.card?.info?.imageId}></img>
                </div>
            </div>
        ))
    )
}
export default ItemDtls;