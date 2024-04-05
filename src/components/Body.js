import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const [listOfRes, setListOfRes] = useState([]);
    const [searchText, setSearchText]= useState("");
    const [filteredRestaur,setFilteredRestaur]= useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.17286002404871&lng=75.72874367237092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaur(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRes.length === 0){
        return <Shimmer/>;
       
    }
    return(
        <div className="body">
            <div className = "filter">
                <div className="search">
                <input type = "text" className="search-box" value ={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={()=>{
                    const filteredRestaur = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaur(filteredRestaur);
                }}>Search</button>
                </div>
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
                filteredRestaur.map((restaur)=> (<RestaurantCard key = {restaur.info.id} resData = {restaur}/>))
               }
            </div>
        </div>

    );
}

export default Body;