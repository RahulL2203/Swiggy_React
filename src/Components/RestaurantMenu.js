import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null); 
    const [menuItems1,setMenuItems1] = useState([]); 

    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
            const data = await fetch(MENU_URL  + resId);
            const json = await data.json();
            console.log(json)
            setResInfo(json.data)
            setMenuItems1(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories);
            
    };

    if(resInfo==null) return <Shimmer/>;

   const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info

    console.log(menuItems1 );


    return (
        <div className="menu ">
            <h1>{name} </h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
            { menuItems1.map((item,i)=>
            (<div key ={i}><h3>{item?.title} </h3>
            <ul>{item.itemCards.map((sub)=>
            <li key={sub.card.info.id}>{sub.card.info.name} - Rs.{sub.card.info.price/100}</li>)}
               
            </ul>
            
            </div>))}
            </ul>
          {/* [0].itemCards[0].card.info

          [0].itemCards[4].card.info */}

{/* {menuItems1[0].map((item,index)=><li key={index}>{item.itemCards.card.info.name }</li>)} */}
          
        
        </div>
    )
}

export default RestaurantMenu;