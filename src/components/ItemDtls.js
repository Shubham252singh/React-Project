import { ITEM_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartRedux";
export const ItemDetails=({detail})=>{
    const {name,price,defaultPrice,ratings,description,imageId}=detail?.card?.info;
    const dispatch =useDispatch();
    const handleAddItem=(detail)=>{
        dispatch(addItem(detail));
    }
    return (
        <div className ="border-b-2 border-amber-200 flex justify-between min-h-36">
            <div className ="py-2 px-6">
                <h4 className ="text-lg">{name}</h4>
                <h5>₹ {price?price/100:defaultPrice/100}</h5>
                {ratings?.aggregatedRating?.rating && (
                    <h5 className="mt-1">⭐️ {ratings?.aggregatedRating?.rating}</h5>
                )}
                <p className="mt-1 text-xs">{description}</p>
            </div> 
            <div className="relative flex justify-center items-end my-2 w-45 min-w-45 h-32">
                <img className="rounded-xl w-full h-full object-cover" alt="item image" src={ITEM_URL + imageId} />
                <button className="absolute rounded-lg font-bold bg-white text-red-300 w-24 border" onClick ={()=>{handleAddItem(detail)}}>
                    ADD +
                </button>
            </div>

        </div>
    )
}