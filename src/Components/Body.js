import RestaurantCard, {withPromotedLabel } from "./RestaurantCard";
import { useState ,useEffect , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

    console.log("Body Rendered" , listOfRestaurants);
    
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

        const onlineStatus = useOnlineStatus(); 
        if(onlineStatus==false) return <h1>Looks like u 're Offline , Please check ur Internet connection....  </h1>


        const {loggedInUser, setUserName} = useContext(UserContext); 
//         if(listOfRestaurants.length==0){
//             return <Shimmer/>;
//         }
// else
    return listOfRestaurants?.length== 0 ? <Shimmer/>: (
        <div className="body">
            <div className="filter flex items-center justify-around mt-24">
            <div className="search m-2 p-4">
                    <input type ="text" className="border border-solid border-black rounded-l-lg px-2 py-1" value ={searchText} onChange={(e)=>
                    setSearchText(e.target.value)
                     
                    }/>
                   
                    <button className={"bg-blue-100 px-2 py-1.5 rounded-r-lg hover:bg-blue-300" } onClick={()=>{
                        console.log(searchText )

                         const filterRes = listOfRestaurants.filter((restaurant)=>
                         restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())) 
                         setFilteredRestaurants(filterRes);
                        //Filter the Restauarants 
                        //Search Text
                    }}>Search</button>
            </div>
            <div  className="search m-2 p-2 bg-slate-300 rounded-lg">
            <button className="top-rated-res"
                     onClick={()=>{
                    const FilterdList = listOfRestaurants.filter((res)=>res?.info?.avgRating>4);
                    setFilteredRestaurants(FilterdList);

                }}>⭐️⭐️⭐️⭐️  Rated Restaurants</button>

            

            </div>

            <div  className="search m-2 p-2 bg-slate-300 rounded-lg">
            UserName: <input className="border border-black"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value )}/>

            

            </div>
                
        
            </div>

            <div className="flex flex-wrap mt-[-22px]">
                {filteredRestaurants?.map((restaurant)=>(
                    <Link  key ={restaurant?.info?.id} to ={"/restaurants/"+ restaurant?.info?.id}>

                     {(restaurant?.info?.areaName== "Kukatpally") ? 
                     <RestaurantCardPromoted key ={restaurant?.info?.id + 1}  resData={restaurant}/> :  
                     <RestaurantCard key ={restaurant?.info?.id} resData={restaurant}/>}

                        
                     </Link>
                ))
                 }

            </div>

        </div>
    )
}

export default Body; 