import { useState } from "react";

const User = (props)=>{

    const [count] = useState(0);
    const [count2] = useState(1)
    return (
        <div className="user-card">
            <h3>Count: {count}</h3> 
            <h3>Count2: {count2}</h3> 
            <h3>Name: {props.name}</h3> 
            <h3>Location: Hyderabad</h3>
            <h3>Contact: Rahul_Lakkavarapu</h3 >
        </div>
    )
}

export default User;