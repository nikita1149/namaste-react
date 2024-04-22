import { useState } from "react";
const User = (props)=>{
    const [count , setCount] = useState(0);
    return(
        <div className="user-card">
            <h2>count = {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count-Increase</button>

            <button onClick={()=>{
                setCount(count-1);
            }}>count-Decrease</button>
            
            <h2>Name : {props.name}</h2>
            <h3>Location : Hisar</h3>
            <h4>contact : nikitaarora917@gmail.com</h4>
        </div>
        
    );

};
export default User;