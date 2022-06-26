import React, { useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import NewMember from './components/./new-member/NewMember';
import MyPage from './components/mypage/MyPage';
import Service from './components/service/Service';
import Home from './components/Home/Home';
import AuthRoute from './components/auth/AuthRoute';
import ServiceWrite from './components/service/ServiceWrite';
import Oldbooks from './components/oldbook/Oldbooks';
import Books from './components/search-item/Books';
import NewBooks from './components/newbook/NewBooks';
import Id from './components/find/Id';
import Pw from './components/find/Pw';
import LogOut from './components/logout/LogOut';
import MemberOut from './components/member-out/MemberOut';
import {SignIn} from '../src/components/sign/SignIn';

import {Link , useHistory} from 'react-router-dom';
import '../src/css files/nav.css';
import Input from "../src/components/search-item/Input";



function App() {

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ id, password }) => setUser(SignIn({ id, password }));
  const logout = () => setUser(null);
   
  
  let history = useHistory();
    
    const handleClick = ()=>{
        logout();
        history.push('/');
    }


  // appjs 부터 시작해야함

   return(
      <BrowserRouter>
        <div id="navibar" className="nav-flex">
            <div className="nav-left">
                <div className="icon">
                    <Link to={'/'}><img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="icon" className="title-icon" /></Link>
                </div>
                <div className="title">
                    <Link to={'/'}>BUKBUK</Link> 
                </div>
            </div>
            <div className="search">
                <Input/>
            </div>
            <div className="tab">

                {authenticated
                ? <div className="login">
                    <div className="login-btn" onClick={handleClick}>로그아웃</div>
                </div> 
                :<div className="login">
                    <Link to={'/login'}><div className="login-btn">로그인</div></Link>
                </div>
                }

                {authenticated
                ?<div className="new-member">
                    <Link to={'/mypage'}> <div className="new-member-btn">내 정보 수정</div></Link>
                </div>   
                :<div className="new-member">
                   <Link to={'/new-member'}> <div className="new-member-btn">회원가입</div></Link>
                </div>
                }


                <div className="help">
                    <Link to={'/service'}><div className="service-btn">고객센터</div></Link>
                </div>
            </div>
        </div>
        

         <Switch> 
         <Route path={'/'}
                exact  
                authenticated={authenticated}
                logout={logout}
                component={Home}
          />
            <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
          />
            
            <Route path={'/new-member'}component={NewMember}/> 
            <Route path={'/service'} component={Service}/>
            <Route path={'/write'} component={ServiceWrite}/>
            <Route path={'/oldbooks'} component={Oldbooks}/>
            <Route path={'/book'} component={Books}/>
            <Route path={'/newbooks'} component={NewBooks}/>
            <Route path={'/find/id'} component={Id}/>
            <Route path={'/find/pw'} component={Pw}/>


              {/*로그인 안 했을 때 접근 불가 url  */}
            <AuthRoute
            authenticated={authenticated}
            path="/mypage"
            render={props => <MyPage  {...props} />}
          />

            
            <AuthRoute
              authenticated={authenticated}
              path="/logout"
              render={props => <LogOut  {...props} />}
            />  


            <AuthRoute
              authenticated={authenticated}
              path="/member-out"
              render={props => <MemberOut  {...props} />}
            />  

         </Switch>
      </BrowserRouter>
   )

}
export default App;