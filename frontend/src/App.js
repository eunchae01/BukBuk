import React from 'react';
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
import MemberOut from './components/member-out/MemberOut';
import Nav from './components/navibar/Nav';
import Search from './components/book-search/Search';
import Cart from './components/cart/Cart';



function App() {

  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({ id, password }) => setUser(SignIn({ id, password }));
  // const logout = () => setUser(null);
  // console.log(authenticated)
   
  const token = localStorage.getItem('accessToken');


  
    



  // appjs 부터 시작해야함

   return(
      <BrowserRouter>
        <Nav authenticated={token}/>
         <Switch> 
          <Route path={'/'} exact component={Home}/>
            <Route path={"/login"} component={Login}/>
            <Route path={'/new-member'}component={NewMember}/> 
            <Route path={'/service'} component={Service}/>
            <Route path={'/write'} component={ServiceWrite}/>
            <Route path={'/oldbooks'} component={Oldbooks}/>
            <Route path={'/book'} component={Books}/>
            <Route path={'/newbooks'} component={NewBooks}/>
            <Route path={'/find/id'} component={Id}/>
            <Route path={'/find/pw'} component={Pw}/>
            <Route path={'/search'} component={Search}/>

              {/*로그인 안 했을 때 접근 불가 url  */}
            <AuthRoute
            authenticated={token}
            path="/mypage"
            component={MyPage}
            />
            <AuthRoute
            authenticated={token}
            path="/cart"
            component={Cart}
            />
            <AuthRoute
              authenticated={token}
              path="/member-out"
              component={MemberOut}
            />  
         </Switch>
      </BrowserRouter>
   )

}
export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Test from './components/zzzJwtTest3/Test';
// import Profile from './components/zzzJwtTest3/Profile';

// function App() {
//   const token = localStorage.getItem('accessToken');

//   if(!token) {
//     return <Test />
//   }

//   return (
//     <div className="wrapper">
//       <BrowserRouter>
//         <Switch>
//           <Route path="/profile">
//             <Profile />
//           </Route>
//           <Route path="/">
//             <Profile />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



