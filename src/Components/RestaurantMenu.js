import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null); 
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5002987&lng=78.396665&restaurantId=1691&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            console.log(json);
            setResInfo(json.data)
    };

    // const {name, cuisines, costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info

    const menuItems =resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel
    return (
        <div className="menu ">
            {/* <h1>{name} </h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> */}
          
            <ul>
                {()=>{
                    menuItems.map((item)=>{ item.title
                       
                    }
                    )
                }} 
                <li>Biryani</li>
                <li>Chineese</li>
                <li>IceCreams</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;