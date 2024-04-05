import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listOfRes, setListOfRes] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.379716503337345&lng=77.31885340064764&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRes.length === 0){
        return <Shimmer/>;
       
    }
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className = "filter">
                <button className="filter-btn"  onClick={()=>{
                    const filteredRes = listOfRes.filter((res)=>res.info.avgRating>4.2);
                    setListOfRes(filteredRes);
                }}
                >
                    TOP RATED RESTAURANTS
                </button>
            </div>
            <div className="res-container">
               {
                listOfRes.map((restaur)=> (<RestaurantCard key = {restaur.info.id} resData = {restaur}/>))
               }
            </div>
        </div>

    );
}

export default Body;