import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{

    const [listOfRes, setListOfRes] = useState([]);
    const [searchText, setSearchText]= useState("");
    const [filteredRestaur,setFilteredRestaur]= useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.379716503337345&lng=77.31885340064764&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

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
                    const filteredRes = listOfRes.filter((res)=>res.info.avgRating>4);
                    setFilteredRestaur(filteredRes);
                }}
                >
                    TOP RATED RESTAURANTS
                </button>
            </div>
            <div className="res-container">
               {
                filteredRestaur.map((restaur)=> (
                <Link key ={restaur?.info?.id}
                to = {"/restaurants/" + restaur?.info?.id} ><RestaurantCard resData = {restaur}/></Link>))
               }
            </div>
        </div>

    );
}

export default Body;