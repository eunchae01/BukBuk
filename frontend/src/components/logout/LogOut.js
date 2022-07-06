import React from "react";
import swal from "sweetalert";

function LogOut(){
    
    const handleLogout = () => {
        swal("로그아웃 성공 !", "Logged Out" , "success", {
            buttons: false,
            timer: 2000,
          });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setTimeout(()=>{
            window.location.href='/'
        },2000)
    }
    return(
        <div 
            className="login-btn"
            onClick={handleLogout}>
            로그아웃
        </div>
    );

}
export default LogOut;

