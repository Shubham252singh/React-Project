import { ITEM_URL } from "../utils/Constant";
export const ItemDetails=({detail})=>{
    const {name,price,defaultPrice,ratings,description,imageId}=detail?.card?.info;
    return (
        <div className ="border-b-2 border-amber-200 flex justify-between min-h-36">
            <div className ="py-2 px-6">
                <h4 className ="text-lg">{name}</h4>
                <h5>₹ {price?price/100:defaultPrice/100}</h5>
                {ratings?.aggregatedRating?.rating && (
                    <h5 className="mt-1">⭐️ {ratings?.aggregatedRating?.rating}</h5>
                )}
                <p className="mt-1">{description}</p>
            </div> 
             <div className="flex items-center">
                <img className="rounded-xl h-32 min-w-45 " alt="item image" src={ITEM_URL + imageId}></img>
            </div> 
        </div>
    )
}