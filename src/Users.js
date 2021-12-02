import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Users = () => {
    const {name , lname} = useParams();
    const location = useLocation();
    return (
        <>
             <h1 > Users {name} {lname} Page</h1> 
             <p >My current Location is {location.pathname}</p>
             {location.pathname=== `/users/sami/butt` ? <button>Click me</button> : null}
        </>
    )
}

export default Users
