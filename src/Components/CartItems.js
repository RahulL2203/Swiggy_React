import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CATEGORY_IMG_CDN } from "../utils/constants";

const CartItems = ({items})=>{

const dispatch = useDispatch();

const handleRemoveItem = (index)=>{
        dispatch(removeItem(index));
    };

    return(
        <div>
            {items.map((item,index)=>(
                <div key ={item.card.info.id}
                className="text-left border-b-2 p-2 m-2 flex justify-between">
                    
                    <div className="w-10/12">
                        <span>{item.card.info.name}</span>
                        <span> - Rs.{item.card.info.price/100}</span>
                        {/* <img className="w-14" src = {CATEGORY_IMG_CDN + item.card.info.imageId}/> */}
                    </div>
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className="bg-red-200  p-1 rounded-ee-xl" 
                            onClick={()=>handleRemoveItem(index)}>Remove - </button>
                        </div>
                        <img className="w-full rounded-lg" alt = "NA " src = {CATEGORY_IMG_CDN + item?.card?.info?.imageId}/>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems;