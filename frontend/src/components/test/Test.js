import axios from "axios";

const Start =  async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>console.log(res))

    
    
}
const data = Start();

console.log(data);

export default Start;