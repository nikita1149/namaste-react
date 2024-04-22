import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu =(resId)=>{

    const [resInfo, setResInfo]= useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const dat = await fetch(MENU_API+ resId);
        const json = await dat.json();
        setResInfo(json.data);
    };
    return resInfo;
}

export default useRestaurantMenu;