import React from "react";
import { AuthContext } from "./authContext";
import { Navigate } from "react-router-dom";

const LoggedIn=()=>{
    const {token} = React.useContext(AuthContext);
    return (
        <div>
        {
        <Navigate replace to="/" />
        }
        </div>
    )
}

export default LoggedIn;