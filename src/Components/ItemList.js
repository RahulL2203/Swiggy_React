import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CATEGORY_IMG_CDN } from "../utils/constants";

const ItemList = ({items})=>{

const dispatch = useDispatch();

const handleAddItem = (item)=>{
        dispatch(addItem(item));
    };

    return(
        <div>
            {items.map((item)=>(
                <div key ={item.card.info.id}
                className="text-left border-b-2 p-2 m-2 flex justify-between">
                    
                    <div className="w-10/12">
                        <span>{item.card.info.name}</span>
                        <span> - Rs.{item.card.info.price/100}</span>
                        {/* <img className="w-14" src = {CATEGORY_IMG_CDN + item.card.info.imageId}/> */}
                    </div>
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className="bg-green-100  p-1 rounded-ee-xl" 
                            onClick={()=>handleAddItem(item)}>Add +</button>
                        </div>
                        <img className="w-full rounded-lg" alt = "NA " src = {CATEGORY_IMG_CDN + item?.card?.info?.imageId}/>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;