import React, { useState } from "react";
import Nav from "../navibar/Nav";
import Menu from '../navibar/Menu';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import '../../css files/login.css';


function Login(){
        const [inputValue , setInputValue] = useState({
            id: "",
            password: ""
        });




        const {id , password } = inputValue;


        // input 위치에 맞게 할당하는 함수
        const onChange =  event => {
            const { name, value } = event.target;
            // console.log(event.target.value)
            setInputValue({
              ...inputValue, 
              [name]: value,
            });
          };

          const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
          const isValidId = id.length >= 1;
          const isValidPassword = password.length >= 8 && specialLetter >= 1;  

          const getIsActive = isValidId && isValidPassword  === true;


         
        let body = {

            id : id,
            password: password

         };
         let history = useHistory();



         // 제출
         const handleSubmit =(e)=>{
            e.preventDefault();
            console.log("id :" + id)
            console.log("pw :" + password)
            axios.post("" , body)
            .then(res=> console.log(res))
            history.push("/")
            .catch(e=> console.log(e))
        }
            
         
        

    return(
        <>
            <Nav/>
            <Menu/>
            <main id="login-box">
                <div className="top">
                    <div className="logo">
                        <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="logo"/>
                    </div>
                    <p>Hello , Welcome to BUKBUK ! </p>
                </div>
                <div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input placeholder="아이디" type="id" name="id" onChange={onChange} className="id-input"/>
                        <input placeholder="비밀번호" type={'password'} name="password" onChange={onChange} className="pw-input"/>
                        <button type="submit" className={getIsActive ?'green' :'gray'}>로그인</button>
                        <div>
                            <Link to={'/find/id'}>아이디 찾기</Link>
                            <Link to={'find/pw'}>비밀번호 찾기</Link>
                        </div>
                        <Link to={'/new-member'} className='move-new-member'>회원가입</Link>
                    </form>
                </div>
            </main> 
        </>
    );
};

export default Login;

