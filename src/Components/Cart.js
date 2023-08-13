import { useDispatch, useSelector } from "react-redux";
//import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    const cartItems = useSelector((store)=>store.cart.items)
    return(
        <div className="text-center m-4 p-4 mt-28">
            <h1 className="font-bold text-3xl">Cart_Items</h1>
            <div className="w-6/12 m-auto">
{(cartItems!=0)? 
<button className= "bg-red-100 p-2 m-1 rounded-lg" onClick={handleClearCart}>Clear Cart </button>
    :<h1 className="m-5 p-2 bg-gray-700 text-white rounded-full text-2xl font-mono">
        Cart Empty... <Link to ="/" className="text-teal-400">+ Add Items</Link></h1>}   
                     
    <CartItems items = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart;

