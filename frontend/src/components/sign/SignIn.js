import axios from "axios";


  export function SignIn({ id, password }) {
    
    const user = axios.post("" , null , {params:{mem_id : id , mem_pwd: password}})
    if( user !== undefined){return user}
    else if (user === undefined) throw new Error();
    
  }


