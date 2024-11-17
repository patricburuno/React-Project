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

    const {resCard} = props;
const {id,name,areaName,cuisines,costForTwo,avgRating} = resCard?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            
            <img className = "res-logo" alt="res-logo" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resCard.info.cloudinaryImageId } />
                       
         
            <h3>{name}</h3>
            <h3>{areaName}</h3>
            <h3>{cuisines}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            </div>

            
    );
};

const resList =  [
  {
      "info": {
          "id": "454365",
          "name": "Cock Ra Co ",
          "cloudinaryImageId": "kvj8l5e4f7mv4d8psjty",
          "locality": "Avinashi Road",
          "areaName": "Lakshmi Mills",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Biryani",
              "Arabian",
              "South Indian",
              "Chinese"
          ],
          "avgRating": 4.4,
          "parentId": "4851",
          "avgRatingString": "4.4",
          "totalRatingsString": "3.9K+",
          "promoted": true,
          "adTrackingId": "cid=19088081~p=0~adgrpid=19088081#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=454365~eid=569e0d5c-c7b3-423c-85eb-2a22eb843c16~srvts=1729700576307~collid=45995",
          "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 9.3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "9.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "19088081"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=454365",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "582150",
          "name": "Chinese Wok",
          "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
          "locality": "Avinashi Road",
          "areaName": "Peelamedu",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "61955",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.1K+",
          "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 5.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-24 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=582150",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "533381",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_533381.JPG",
          "locality": "Avinashi Road",
          "areaName": "Sitra",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Fast Food",
              "Rolls & Wraps"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "3.6K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                                  "description": "Delivery!"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹89"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=533381",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "281553",
          "name": "Kovai Durbar",
          "cloudinaryImageId": "cmqi0nywhcwau3ugmg9z",
          "locality": "NGP Nagar",
          "areaName": "Kalapatti",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Biryani",
              "Chinese",
              "Kerala"
          ],
          "avgRating": 4.3,
          "parentId": "120376",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.7K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:45:00",
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
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                              }
                          }
                      ]
                  }
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=281553",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "841486",
          "name": "The Chocolate Room",
          "cloudinaryImageId": "01cbfaa928468d4759ce00e94dfe1623",
          "locality": "Indira Nagar",
          "areaName": "Avinashi main road",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Fast Food"
          ],
          "avgRating": 4.5,
          "parentId": "1002",
          "avgRatingString": "4.5",
          "totalRatingsString": "73",
          "promoted": true,
          "adTrackingId": "cid=19959210~p=1~adgrpid=19959210#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=841486~eid=b213cc9a-76a0-46f0-8759-66dab5dbdb0f~srvts=1729700576307~collid=45995",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "19959210"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=841486",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "351743",
          "name": "Shahi Grill",
          "cloudinaryImageId": "zfjpsnxjojoelw2k1hak",
          "locality": "Kalapatti Main Road",
          "areaName": "Kalapatti",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Grill",
              "Biryani",
              "Arabian",
              "Tandoor",
              "Chinese",
              "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "13253",
          "avgRatingString": "4.4",
          "totalRatingsString": "4.6K+",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 1,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=351743",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "198519",
          "name": "Kanakathara",
          "cloudinaryImageId": "luxsjm6rqmu8z1t5pyo5",
          "locality": "Periyar Nagar",
          "areaName": "Chinniyampalayam",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Beverages",
              "South Indian"
          ],
          "avgRating": 4.3,
          "parentId": "11772",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.6K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountTag": "POCKET HERO",
              "discountCalloutInfo": {
                  "message": "Free Delivery",
                  "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                  }
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=198519",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "359787",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "jfxpz1qwtk5motov6dqg",
          "locality": "Aavarampalayam Road",
          "areaName": "Peelamedu",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.8",
          "totalRatingsString": "1.1K+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 8.8,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "8.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=359787",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "52787",
          "name": "Sree Annapoorna",
          "cloudinaryImageId": "vxcwz0jbchbxnuh474zr",
          "locality": "Madhusudhan Layout",
          "areaName": "Peelamedu",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Indian",
              "South Indian",
              "Chinese",
              "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "4732",
          "avgRatingString": "4.6",
          "totalRatingsString": "70K+",
          "promoted": true,
          "adTrackingId": "cid=20011886~p=2~adgrpid=20011886#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=52787~eid=f4cdc5eb-6ead-4a78-beb4-604726e0e14c~srvts=1729700576307~collid=45995",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20South%20Indian.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Coffee.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                                  "description": "Delivery!"
                              }
                          },
                          {
                              "attributes": {
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20South%20Indian.png",
                                  "description": "Delivery!"
                              }
                          },
                          {
                              "attributes": {
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Coffee.png",
                                  "description": "Delivery!"
                              }
                          },
                          {
                              "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                                  "description": "Delivery!"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "20011886"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=52787",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "53185",
          "name": "Velu Nayaker Mess Plus",
          "cloudinaryImageId": "f7o8zjaqxwcabmtgc1r2",
          "locality": "Avinashi Road",
          "areaName": "Chinniyampalayam",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Indian",
              "Chinese"
          ],
          "avgRating": 4.2,
          "parentId": "8778",
          "avgRatingString": "4.2",
          "totalRatingsString": "5.4K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                  }
              ],
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
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=53185",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "182130",
          "name": "Karaikkudi Chettinadu",
          "cloudinaryImageId": "nojthiavq3ehydpixzh9",
          "locality": "Avinashi Road",
          "areaName": "Neelambur New",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Indian"
          ],
          "avgRating": 4.3,
          "parentId": "114958",
          "avgRatingString": "4.3",
          "totalRatingsString": "1.4K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "25% OFF",
              "subHeader": "ABOVE ₹129",
              "discountTag": "FLAT DEAL"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=182130",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "733641",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/d5ec0a30-2ec4-40d1-aad7-eb8d9ae67f97_733641.JPG",
          "locality": "Megaplex Mall",
          "areaName": "Broadway Mall",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "665",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-24 01:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=733641",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "890519",
          "name": "Food Valley",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/f190f31a-99c2-4f4a-b273-a5f757df51c9_890519.jpg",
          "locality": "Cheran ma Nagar",
          "areaName": "Hopes",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Chinese",
              "South Indian"
          ],
          "avgRating": 4.7,
          "parentId": "82106",
          "avgRatingString": "4.7",
          "totalRatingsString": "25",
          "promoted": true,
          "adTrackingId": "cid=20267912~p=3~adgrpid=20267912#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=890519~eid=347283d8-cdea-499c-9995-ffd3d1f66f45~srvts=1729700576307~collid=45995",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 3.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "20267912"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=890519",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "132157",
          "name": "Courtallam Border Rahmath Kadai",
          "cloudinaryImageId": "cruhctdgjpiv7jghuesy",
          "locality": "Avinashi Road",
          "areaName": "Sitra",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Chettinad",
              "South Indian",
              "Biryani",
              "Indian"
          ],
          "avgRating": 4.4,
          "parentId": "3513",
          "avgRatingString": "4.4",
          "totalRatingsString": "2.9K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {},
                  "textBased": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=132157",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "366028",
          "name": "Hotel Kannappa",
          "cloudinaryImageId": "gqqdwbbzjypkq8dpflc4",
          "locality": "Thudiyalur",
          "areaName": "Sitra",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Biryani",
              "Chettinad",
              "South Indian"
          ],
          "avgRating": 4.4,
          "parentId": "8318",
          "avgRatingString": "4.4",
          "totalRatingsString": "7.8K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "1.4K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=366028",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "428127",
          "name": "Street Arabiya",
          "cloudinaryImageId": "byyy0qyfqgguvqamsd2p",
          "locality": "Kalapatti Main Road",
          "areaName": "Hopes",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Continental"
          ],
          "avgRating": 4.4,
          "parentId": "8677",
          "avgRatingString": "4.4",
          "totalRatingsString": "413",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-10-23 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
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
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=428127",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  }
];

 const Body = () => { 

    return (
        <div className="body">
            <div className="Search">Search</div> 
            <div className="res-container">

            {/* <RestaurantCard resCard = {resList[0]} />
            <RestaurantCard resCard = {resList[1]} />
            <RestaurantCard resCard = {resList[2]} />
            <RestaurantCard resCard = {resList[3]} />
            <RestaurantCard resCard = {resList[4]} />
            <RestaurantCard resCard = {resList[5]} />
            <RestaurantCard resCard = {resList[6]} />
            <RestaurantCard resCard = {resList[7]} />
            <RestaurantCard resCard = {resList[8]} />
            <RestaurantCard resCard = {resList[9]} />
            <RestaurantCard resCard = {resList[10]} />
            <RestaurantCard resCard = {resList[11]} />
            <RestaurantCard resCard = {resList[12]} />
            <RestaurantCard resCard = {resList[13]} />
            <RestaurantCard resCard = {resList[14]} />
            <RestaurantCard resCard = {resList[15]} /> */}

        {/* CONFIG DRIVAN UI  */}
                    {
                        resList.map((restaurant => (
                            <RestaurantCard key={restaurant.info.id} resCard = {restaurant} />
                        )

                        ))
                    }

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