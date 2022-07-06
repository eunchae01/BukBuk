import React, { useState } from "react";
import Menu from '../navibar/Menu';
import { Link} from "react-router-dom";
import '../../css files/login.css';

import swal from 'sweetalert';



function Login(){
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();
        


        //보안 인증
        // const authenticated = users != null ;
        // console.log(authenticated)
        



       


        // input 위치에 맞게 할당하는 함수
        // const onChange =  event => {
        //     const { name, value } = event.target;
        //     // console.log(`${name}: ${event.target.value}`)
        //     setInputValue({
        //       ...inputValue, 
        //       [name]: value,
        //     });
        //   };
          

        //   const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        //   const isValidId = id.length >= 1;
        //   const isValidPassword = password.length >= 8 && specialLetter >= 1;  

        //   const getIsActive = isValidId && isValidPassword  === true;





          async function loginUser(credentials) {
            return fetch('https://www.mecallapi.com/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
            })
              .then(data => data.json())
           }
          
          



          const handleSubmit = async e => {
            e.preventDefault();
            const response = await loginUser({
              username,
              password
            });
            if ('accessToken' in response) {
              swal("로그인 성공 !", response.message, "success", {
                buttons: false,
                timer: 2000,
              })
              .then((value) => {
                localStorage.setItem('accessToken', response['accessToken']);
                localStorage.setItem('user', JSON.stringify(response['user']));
                window.location.href = "/";
              });
            } else {
              swal("로그인 실패", response.message, "error");
            }
          }




        
        
        

    return(
        <>
            <Menu/>
            <main id="login-box">
                <div className="top">
                    <div className="logo">
                        <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="logo"/>
                    </div>
                    <p>Hello , Welcome to BUKBUK ! </p>
                </div>
                <div className="login-input">
                    <form className="login-form" onSubmit={handleSubmit}>
                        
                        <div className="id-pw">
                            <input placeholder="아이디" type="id" name="id" onChange={e => setUserName(e.target.value)} className="id-input"/>
                            <input placeholder="비밀번호" type={'password'} name="password" onChange={e => setPassword(e.target.value)} className="pw-input"/>
                        </div>

                        {/* 로그인 버튼 */}
                        <button type="submit" className={'green'}>로그인</button>
                        
                        <div className="find">
                            <Link to={'/find/id'} className='id-find'>아이디 찾기</Link>
                            <Link to={'find/pw'}>비밀번호 찾기</Link>
                        </div>
                        <div className="new">
                            <Link to={'/new-member'} className='move-new-member'>회원가입</Link>
                        </div>
                    </form>
                </div>
            </main> 
        </>
    );
};

export default Login;

