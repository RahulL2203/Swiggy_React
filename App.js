import React from "react";
import ReactDOM  from "react-dom/client";

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
const Header =()=>{
    return(
    <div className="header">        
        <div className="logo-container">
            <img className="logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>

    )
}
const RestaurantCard =(props)=>{
    const {resData} =props;
    const {cloudinaryImageId,name,areaName,cuisines,avgRating,costForTwo,}= resData?.info
    const {deliveryTime} = resData?.info?.sla
    return(
        <div className="restaurant-card" style ={{backgroundColor:"#f0f0f0"}}>
            <img className="res-image" alt = "res-image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            
        </div>
    )
}

const resList = [
    {
    "info": {
    "id": "17097",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "South India Shopping Mall",
    "areaName": "Kukatpally",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "17097",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "547",
    "avgRatingString": "3.8",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 2.1,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "2.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 00:28:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-south-india-shopping-mall-kukatpally-hyderabad-17097",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "46881",
    "name": "Pista House Restaurant & Bakery ",
    "cloudinaryImageId": "e3r7hfdwz8cwgqi6jfgc",
    "locality": "Kukatpally",
    "areaName": "Kukatpally",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese",
    "Kebabs",
    "Mughlai",
    "Tandoor",
    "Desserts"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "46881",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "319765",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pista-house-restaurant-and-bakery-kukatpally-hyderabad-46881",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "408181",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Lahari Estate",
    "areaName": "Nizampet & Pragathi Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 3.5,
    "feeDetails": {
    "restaurantId": "408181",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3600
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3600
    },
    "parentId": "721",
    "avgRatingString": "3.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-lahari-estate-nizampet-and-pragathi-nagar-hyderabad-408181",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "1853",
    "name": "Cream Stone Ice Cream",
    "cloudinaryImageId": "ecdb8917a93d30f0f633ac4163119cd5",
    "locality": "Kukatpally",
    "areaName": "Kukatpally",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts",
    "Beverages",
    "Ice Cream Cakes"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "1853",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "289",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 1.6,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "1.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 03:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "D",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cream-stone-ice-cream-kukatpally-hyderabad-1853",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "24619",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "wkfr1eulvokpdcqhhi6m",
    "locality": "Alluri Trade Center",
    "areaName": "Venkat Nagar Colony",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "24619",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "2456",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹699",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-alluri-trade-center-venkat-nagar-colony-hyderabad-24619",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "10079",
    "name": "Karachi Bakery",
    "cloudinaryImageId": "vf08wdsj9ljony9zv1b1",
    "locality": "Hydernagar",
    "areaName": "Hyder Nagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "10079",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "1262",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 40,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "40 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 21:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/karachi-bakery-hydernagar-hyder-nagar-hyderabad-10079",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "222934",
    "name": "Istah - The Mediterranean Way",
    "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
    "locality": "Nizampet",
    "areaName": "Kukatpally",
    "costForTwo": "₹240 for two",
    "cuisines": [
    "Mediterranean",
    "Snacks",
    "Biryani",
    "Grill",
    "Kebabs",
    "Arabian",
    "Lebanese",
    "Beverages",
    "Desserts",
    "Italian",
    "Turkish"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "222934",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "3518",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 47,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "47 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-nizampet-kukatpally-hyderabad-222934",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "3171",
    "name": "KS Bakers",
    "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
    "locality": "Kukatpally",
    "areaName": "Bhagyanagar Colony",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Pizzas",
    "Desserts",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "3171",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "574",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 22:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ks-bakers-kukatpally-bhagyanagar-colony-hyderabad-3171",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "4123",
    "name": "Hotel Sitara Grand - Dhanturi Group of hotels",
    "cloudinaryImageId": "o7bpk54rns2rygy39myq",
    "locality": "KPHB Phase 1",
    "areaName": "Kukatpally",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Biryani",
    "Chinese",
    "South Indian",
    "North Indian",
    "Tandoor"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "4123",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "351561",
    "avgRatingString": "3.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "36 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-sitara-grand-dhanturi-group-of-hotels-kphb-phase-1-kukatpally-hyderabad-4123",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "65480",
    "name": "Tipsy Topsy Bakers",
    "cloudinaryImageId": "h6naadfens55hqa7xoqa",
    "locality": "Nizampet Rd",
    "areaName": "Nizampet",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Italian",
    "Desserts",
    "Bakery"
    ],
    "avgRating": 3.6,
    "feeDetails": {
    "restaurantId": "65480",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "6574",
    "avgRatingString": "3.6",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/tipsy-topsy-bakers-rd-nizampet-hyderabad-65480",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "104530",
    "name": "Bakingo",
    "cloudinaryImageId": "ydb7blfursstva9ftdlj",
    "locality": "Hyderabad",
    "areaName": "Kohtaguda",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "104530",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "3818",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bakingo-kohtaguda-hyderabad-104530",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "340186",
    "name": "McDonald's",
    "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
    "locality": "sujana mall",
    "areaName": "Kukatpally",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "340186",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "630",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 70,
    "lastMileTravel": 2.8,
    "serviceability": "SERVICEABLE",
    "slaString": "70 mins",
    "lastMileTravelString": "2.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 22:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "ABOVE ₹999",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-sujana-mall-kukatpally-hyderabad-340186",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "76712",
    "name": "CakeZone",
    "cloudinaryImageId": "dc7abc110dbafe0a9bad837a292842dc",
    "locality": "HMT Satavahana Nagar",
    "areaName": "HMT Satavahana Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Sweets",
    "Ice Cream"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "76712",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "7003",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 0.8,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "0.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cakezone-hmt-satavahana-nagar-hyderabad-76712",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "324758",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "vi2n5cxootq94lhnsgex",
    "locality": "Alluri Trade centre",
    "areaName": "Kukatpally",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "324758",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "2093",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-alluri-trade-centre-kukatpally-hyderabad-324758",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "8681",
    "name": "Santosh Dhaba Exclusive",
    "cloudinaryImageId": "mn2bjddbc5yzectpm2x6",
    "locality": "Bhagya Nagar",
    "areaName": "Kukatpally",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese"
    ],
    "avgRating": 3.7,
    "veg": true,
    "feeDetails": {
    "restaurantId": "8681",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "8784",
    "avgRatingString": "3.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 38,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "38 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/santosh-dhaba-exclusive-bhagya-nagar-kukatpally-hyderabad-8681",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "50099",
    "name": "Vasista's Sri Lakshmi",
    "cloudinaryImageId": "fhlawfoalrnoussx2m7t",
    "locality": "Nizampet main road",
    "areaName": "Nizampet",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Biryani",
    "Chinese",
    "Tandoor",
    "North Indian",
    "South Indian"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "50099",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "387872",
    "avgRatingString": "3.8",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 1.4,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "1.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/vasistas-sri-lakshmi-main-road-nizampet-hyderabad-50099",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "363823",
    "name": "Wow! Momo",
    "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
    "locality": "Kukatpally",
    "areaName": "Kukatpally",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Tibetan",
    "Healthy Food",
    "Asian",
    "Chinese",
    "Snacks",
    "Continental",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "363823",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "1776",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 22:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/wow-momo-kukatpally-hyderabad-363823",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "122942",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "lr7cyhbwh7nbqpxxqd9k",
    "locality": "KPHB Road",
    "areaName": "Kukatpally",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream",
    "Beverages"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "122942",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "2233",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 60,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "60 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 01:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-kphb-road-kukatpally-hyderabad-122942",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "80483",
    "name": "The Bowl Company",
    "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
    "locality": "Seven Hills Colony",
    "areaName": "Kukatpally",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pan-Asian",
    "Continental",
    "North Indian",
    "Desserts",
    "American",
    "Asian",
    "Beverages",
    "Biryani",
    "Chinese",
    "European",
    "Grill",
    "Hyderabadi",
    "Indian",
    "Italian",
    "Kebabs",
    "Lucknowi",
    "Mediterranean",
    "Mexican",
    "Mughlai",
    "Oriental",
    "Pastas",
    "Punjabi",
    "Raja"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "80483",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "4317",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-29 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹139"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-bowl-company-seven-hills-colony-kukatpally-hyderabad-80483",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "58774",
    "name": "Almond House",
    "cloudinaryImageId": "qoycmlg27eisr9z3ncxu",
    "locality": "JNTU - Hitech City Road",
    "areaName": "Kukatpally",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Sweets",
    "Desserts",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 4.6,
    "veg": true,
    "feeDetails": {
    "restaurantId": "58774",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "40",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-07-28 21:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/almond-house-jntu-hitech-city-road-kukatpally-hyderabad-58774",
    "type": "WEBLINK"
    }
    }
    ]

     
const Body =()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {resList.map((restaurant)=>(
                    <RestaurantCard key ={restaurant.info.id}resData={restaurant}/>
                ))
                 }

            </div>

        </div>
    )
}
const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
