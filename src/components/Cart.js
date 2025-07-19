import { useDispatch, useSelector } from "react-redux";
import { ItemDetails } from "./ItemDtls"
import { clearAllItem } from "../utils/cartRedux";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart.items);
    const handleClearCart = () => {
        dispatch(clearAllItem());
    }
    if (cartitems.length == 0) {
        return (
            <div className="m-2 p-1">
                <div className="flex items-center justify-between px-3 my-3 mx-1">
                    <h1 className="font-bold text-3xl">Cart</h1>
                </div>
                <div className="m-2 relative flex justify-center items-center h-98">
                     <img className="absolute opacity-25 object-cover w-4/12 h-full" src="https://thumbs.dreamstime.com/b/cooking-process-vector-illustration-flipping-asian-food-pan-cartoon-style-flat-83135779.jpg" alt="Background Image for Cart"></img>
                    <div className="relative text-center m-3">
                        <h2 className="text-2xl font-bold">Good Food is Always Cooking</h2>
                        <h3 className="text-sm"> Your cart is empty. Add someting from the menu</h3>
                        <Link to = "/"><button className="border-2 bg-white  border-orange-700 p-1 m-2 text-orange-700 rounded-lg">Browse Restaurant</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="m-2 p-1">
            <div className="flex items-center justify-between px-3 my-3 mx-1">
                <h1 className="font-bold text-3xl">Cart</h1>
                <button className="border-2 border-red-400 rounded-lg text-red-400 bg-amber-50 p-1 font-bold "
                    onClick={handleClearCart}> Clear Cart</button>
            </div>
            <div>
                {cartitems.map((obj) => <ItemDetails key={obj?.card?.info?.id} detail={obj} data-testid ="cartItemTest"/>)}
            </div>
        </div>
    );
}
export default Cart;