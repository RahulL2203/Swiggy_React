import { LOGO_URL } from "../utils/constants";
import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header =()=>{

    const [btnName, setBtnName] = useState("Login");

    const {loggedInUser}= useContext(UserContext);
    console.log(loggedInUser);

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    return(
     <div className="relative">   
    <div className="flex w-full justify-between bg-blue-100 shadow-lg sm:bg-blue-200 fixed top-0 left-0 right-0">        
        <div className="logo-container">
            <img className="w-24 rounded-full p-1" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">    
            <ul className="flex p-4 m-4 mt-5 justify-evenly">
                <li className="px-4">Online Status : {onlineStatus? "🟢": "🔴"}</li>
                <li className="px-4"><Link to ="/">Home</Link></li>
                <li className="px-4"><Link to ="/about">About US</Link></li>
                
                <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold"><Link to ="/cart"> Cart - {cartItems.length} Items</Link></li>
                <button className="login-btn" 
                onClick={()=>{
                   btnName=="Login" ? setBtnName("Logout") :
                   setBtnName("Login")
                }}>{btnName}</button>

                <li className="px-4 font-mono font-extrabold"> {loggedInUser} </li>
            </ul>
        </div>
    </div>
    </div>
    )
};

export default Header;