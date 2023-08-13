import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{

  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  const [showIndex,setShowIndex] = useState(null); 
    //const [menuItems1,setMenuItems1] = useState([]); 

   //setMenuItems1(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

   // const fetchMenu = async ()=>{
    //         const data = await fetch(MENU_URL + resId);
    //         const json = await data.json();
    //         setResInfo(json.data);
    //         setMenuItems1(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    //         console.log(json.data);
    //         console.log(menuItems1);
    //        // setMenuItems1(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories);

    //       //  setMenuItems1(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards[0]?.card?.info)
    // };


   

    if(resInfo == null) return <Shimmer/>;

   
   const {name, areaName,cuisines,costForTwoMessage} = resInfo.cards[0]?.card?.card?.info;

   const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>c.card?.card?.["@type"] == 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);
 return (
    <div className="text-center p-4 mt-24">
        
        <h1 className="font-bold text-2xl p-2 my-2">{name} - @{areaName} </h1>
        <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>

        {/* Categorioes Accordian */}  
          {categories.map((category,index)=>(
            //Controlled Component
            <RestaurantCategory  
            key = {category?.card.card.title} 
             data = {category?.card?.card}
             showItems= {index== showIndex ? true : false}
             setShowIndex= {()=>setShowIndex(index)}/>
          ))}   
            
            
           {/* <ul>
             {menuItems1.map((item,i)=>
            (<div key ={i}><h3>{itemCards} </h3>
             <ul>{item.map((sub)=>
            <li key={sub.itemCards.card.info.id}>{sub.itemCards.card.info.name} - Rs.{sub.itemCards.card.info.price/100}</li>)}
               
            </ul>
            
        </div>))
        }
    */}
      
      {/* <ul className="listed-items"> 
  <h4>{name}'s Menu</h4>
            {menuItems1 && menuItems1.map((item,i)=> (
           
             <li key ={i} className="menu-list">{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>

               ))}

            </ul> */}

            {/* <ul className="listed-items"> 
               <h4>{name}'s Menu</h4>
            {itemCards && itemCards.map((item,i)=> (
           
             <li key ={i} className="menu-list">{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>

               ))}

            </ul> */}
    
       </div>
       
    )
}

export default RestaurantMenu;