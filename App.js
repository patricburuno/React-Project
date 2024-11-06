import React from "react";
import ReactDOM from "react-dom/client";
// import { useEffect } from "react";

// commit  Ep- 04
const Header =() => {
    return (
         <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us </li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
         </div>
    );
};
const RestaurantCard = (props) => {

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            
            <img className = "res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/e1d07933e404b067c6ed98e6c1b661b5" />
                       
            </div>
    );
};

     

 const Body = () => {

 

  // useEffect ( ()=> {
  //   fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  //   .then (data => data.json()).then(data => {
  //     console.log(data);
  //   });
  
  
  // },[]);

    return (
        <div className="body">
            <div className="Search">Search</div> 
            <div className="res-container">
            <RestaurantCard />

            </div>
            
        </div>
    );
 };

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body />
           

        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);