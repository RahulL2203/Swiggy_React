import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard =(props)=>{

    const {loggedInUser} = useContext(UserContext);

    const {resData} = props;
    const {cloudinaryImageId,name,areaName,cuisines,avgRating,costForTwo}= resData?.info
    const {deliveryTime} = resData?.info?.sla
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200" >
            <img className="rounded-lg" alt = "res-image" src={IMG_CDN_URL + cloudinaryImageId }/>
            <h3 className="font-bold py-2 text-l">{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            <h4 className="font-mono font-extrabold">{loggedInUser}</h4>
            
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=> {
        return(
            <div>
                <label className="absolute bg-blue-400 text-white m-2 p-2 rounded-ee-full">Freeeee Delivery</label>
                <RestaurantCard {...props  }/>
            </div>
        )
    }
}

export default RestaurantCard;