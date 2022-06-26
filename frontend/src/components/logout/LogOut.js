import React from "react";
import { withRouter } from 'react-router-dom';


function LogOut({logout, history}){
    const handleClick = ()=>{
        logout();
        history.push('/');
    }
    return(
        <div 
            className="login-btn"
            onClick={handleClick}>
            로그아웃
        </div>
    );
};

export default withRouter(LogOut);

