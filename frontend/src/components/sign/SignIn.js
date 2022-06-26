import axios from "axios";


export function SignIn ({id , password}){

    let body = {params:{
        id: id,
        password: password
    }}

    const user =axios.post('http://localhost:8080/loginok' , null  , body)
    .then(res=> console.log(res))
    .catch(e=>console.log(e))
    
    return user;
};



