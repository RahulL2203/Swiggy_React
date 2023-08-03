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
    useEffect(()=>{

        setMenuItems1(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(menuItems1);
     
    },[resInfo])
    console.log("fetchedddd....");

    const fetchMenu = async ()=>{
            const data = await fetch(MENU_URL + resId);
            const json = await data.json();
            setResInfo(json);
          
         

            // if (menuItems1==""){
            //     
                
               
            // }
            // else{
            //       setMenuItems1(path_tiffins);
            // }
            

           // setMenuItems1(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories);

          //  setMenuItems1(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards[0]?.card?.info)
         
            
    };

    if(resInfo == null) return <Shimmer/>;

   //const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
   //const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info





    return (
        <div className="menu ">
            {/* <h1>{name} </h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p> */}
            {/* <ul>
            {menuItems1.map((item,i)=>
            (<div key ={i}><h3>{itemCards} </h3>
            <ul>{item.map((sub)=>
            <li key={sub.itemCards.card.info.id}>{sub.itemCards.card.info.name} - Rs.{sub.itemCards.card.info.price/100}</li>)}
               
            </ul>
            
            </div>))}
            </ul> */}

        <ul>

            {menuItems1.map((item,i)=>{

               <li key ={i}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>

               })}

            </ul>
          {/* [0].itemCards[0].card.info

          [0].itemCards[4].card.info */}

{/* {menuItems1[0].map((item,index)=><li key={index}>{item.itemCards.card.info.name }</li>)} */}
          
        
        </div>
    )
}

export default RestaurantMenu;