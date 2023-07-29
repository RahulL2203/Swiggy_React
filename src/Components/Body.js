import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return(
        <div className="body">
            <div className="filter">
                <button className="top-rated-res"
                onClick={()=>{
                    const FilterdList = listOfRestaurants.filter((res)=>res?.info?.avgRating>4);
                    setListOfRestaurants(FilterdList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key ={restaurant?.info?.id} resData={restaurant}/>
                ))
                 }

            </div>

        </div>
    )
}

export default Body; 