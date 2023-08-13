import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems,setShowIndex}) =>{

    //const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
       // setShowItems(!showItems); 

       setShowIndex();
    }
    
    return(
        <div>
            {/* Category Header */}
            <div className="w-6/12 bg-gray-50 mx-auto shadow-lg my-4 p-3">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items= {data.itemCards }/>}
            </div> 
        </div>
    )
}

export default RestaurantCategory;