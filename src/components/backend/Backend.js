import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Backend = () => {
    return (
    
    <>
    <div className="backendWrap">
                <Header />
                 <Outlet />                                     
    </div>
       
    
    </>
    

    )
  };
  
  export default Backend;
  