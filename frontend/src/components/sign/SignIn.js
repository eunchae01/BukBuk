import axios from "axios";
import MyPage from "../mypage/MyPage";

const users = [
    { id: 'kim@test.com', password: '123', name: 'Kim' },
    { id: 'lee@test.com', password: '456', name: 'Lee' },
    { id: 'park@test.com', password: '789', name: 'Park' }
  ]
  
//   export function SignIn({ id, password }) {
//     const user = users.find(user => user.id === id && user.password === password);
//     if (user === undefined) throw new Error();
//     return user;
//   }





  
  export function SignIn({ id, password }) {
    
    const user = axios.post("http://localhost.8080/login-ok" , null , {params:{mem_id : id , mem_pwd: password}})
    .then(res=> 
        <MyPage props ={res.data}/>
    )
    if( user !== undefined ){ return user }
    else if (user === undefined) throw new Error();
    
  }



