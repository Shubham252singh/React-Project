import { ItemDetails } from "./ItemDtls";
import {useState,useRef} from "react"
const ItemList = ({items}) =>{
    const [showItemContent,setShowItemContent]= useState(true);
    const handleClick=(e)=>{
        setShowItemContent(prev=>!prev);
    }
    return (
        <div className ="my-4">
            <div className="flex justify-between h-12 px-6 py-2 shadow-xl" onClick={handleClick}>
                <span className ="text-xl font-bold">{items?.card?.card?.title} ({items?.card?.card?.itemCards.length})</span>
                <span className ="text-xl ">{!showItemContent?"▼":"▲"}</span>
            </div>
            {showItemContent && items?.card?.card?.itemCards.map((obj)=><ItemDetails key = {obj?.card?.info?.id} detail={obj}/>)}
        </div>
    )
}
export default ItemList;