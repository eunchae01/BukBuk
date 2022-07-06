import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './components/zzzJwtTest3/Test';
import Profile from './components/zzzJwtTest3/Profile';

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Test />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
