import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {cloudinaryImageId,name,areaName,cuisines,avgRating,costForTwo}= resData?.info
    const {deliveryTime} = resData?.info?.sla
    return(
        <div className="restaurant-card" style ={{backgroundColor:"#f0f0f0"}}>
            <img className="res-image" alt = "res-image" src={IMG_CDN_URL + cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            
        </div>
    )
}

export default RestaurantCard;