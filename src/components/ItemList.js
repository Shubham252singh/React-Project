import { ItemDetails } from "./ItemDtls";
import {useState} from "react"
const ItemList = ({items,showItemContent,setShowItemContent}) =>{
    const [showSpecificItem,setShowSpecificItem]= useState(showItemContent);
    const handleClick=(e)=>{
        setShowItemContent();
        setShowSpecificItem(prev=>!prev);
    }
    return (
        <div className ="my-4">
            <div className="flex justify-between h-12 px-6 py-2 shadow-xl" onClick={handleClick}>
                <span className ="text-xl font-bold">{items?.card?.card?.title} ({items?.card?.card?.itemCards.length})</span>
                <span className ="text-xl ">{!(showItemContent&&showSpecificItem)?"▼":"▲"}</span>
            </div>
            {showSpecificItem && showItemContent && items?.card?.card?.itemCards.map((obj)=><ItemDetails key = {obj?.card?.info?.id} detail={obj} data-testid ="itemCategoryTest"/>)}
        </div>
    )
}
export default ItemList;