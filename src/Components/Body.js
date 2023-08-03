import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");
    
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async ()=>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5002987&lng=78.396665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

          const json = await data.json();
          console.log(json);

        
              setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
              setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        };

//         if(listOfRestaurants.length==0){
//             return <Shimmer/>;
//         }
// else
    return listOfRestaurants?.length== 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter">
            <div className="search">
                    <input type ="text" className="search-box" value ={searchText} onChange={(e)=>
                    setSearchText(e.target.value)
                     
                    }/>
                   
                    <button className="search-btn" onClick={()=>{
                        console.log(searchText )

                         const filterRes = listOfRestaurants.filter((restaurant)=>
                         restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                         setFilteredRestaurants(filterRes);
                        //Filter the Restauarants 
                        //Search Text
                    }}>Search</button>
            </div>
                
                <button className="top-rated-res"
                     onClick={()=>{
                    const FilterdList = listOfRestaurants.filter((res)=>res?.info?.avgRating>4);
                    setFilteredRestaurants(FilterdList);

                }}>Top Rated Restaurants</button>
            </div>

            <div className="restaurant-container">
                {filteredRestaurants?.map((restaurant)=>(
                    <Link to ={"/restaurants/"+ restaurant?.info?.id}>
                        <RestaurantCard key ={restaurant?.info?.id} resData={restaurant}/>
                     </Link>
                ))
                 }

            </div>

        </div>
    )
}

export default Body; 