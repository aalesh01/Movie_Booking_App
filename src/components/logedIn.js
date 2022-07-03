import React from "react";
import { Navigate } from "react-router-dom";

const LoggedIn=()=>{
    return (
        <div>
        {
        <Navigate replace to="/" />
        }
        </div>
    )
}

export default LoggedIn;