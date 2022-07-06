import React from "react";
import { withRouter } from 'react-router-dom';


function LogOut(){
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href= '/';
      };
    return(
        <div 
            className="login-btn"
            onClick={handleLogout}>
            로그아웃
        </div>
    );
};

export default withRouter(LogOut);

