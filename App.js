import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider ,Outlet} from "react-router-dom"; 
import Shimmer from "./src/Components/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/Components/Cart";

//import Grocery from "./src/Components/Grocery";


//Chunking
//Dynamic   Bundling
//Lazy Loading
//Code Splitting
//On Demand Loading

const Grocery = lazy(() => import("./src/Components/Grocery")); 

/**  
 * Header
 *  - Logo
 *  - NavItems
 * Body 
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */
const AppLayout = ()=>{

    const [userName, setUserName] = useState();
    useEffect(()=>{
        //Make API call here and send U name and Pw

        const data ={
            name:"Rahul",
        };
        setUserName(data.name);
    },[])
    return (
        <Provider store ={appStore }>
        <UserContext.Provider value ={{loggedInUser: userName , setUserName}}>
        <div className="app">
        <UserContext.Provider value ={{loggedInUser: "Ratan Tata"}}> 
            <Header/>
            </UserContext.Provider>
            <Outlet/>
            
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}>
                            <Grocery/>
                        </Suspense>
            }
        ],
        errorElement:<Error/>
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
