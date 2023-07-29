import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider ,Outlet} from "react-router-dom"; 

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
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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
            }
        ],
        errorElement:<Error/>
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
