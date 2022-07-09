import React, { useState } from "react";
import "../../css files/Input.css";
import { useHistory } from "react-router-dom";

const Input = props => {
  const [text, setText] = useState("");
  



  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
    
  };



let history = useHistory()



  const onEnter = e => {
    if (e.keyCode === 13)  {
      history.push(`/search?search=${text}`);    
  };
  
  

}
  const onClick = () =>{
    if(window.location.pathname === '/'){
      history.push(`/search?search=${text}`);  
    }
 }
  








  
  return (
    <>
    <div className="search-type">
        <input 
        type="search" 
        name="query" 
        placeholder="도서명 / isbn 검색" 
        className="input-search"
        onKeyDown={onEnter}
        onChange={onTextUpdate}
        value={text}
        />
    </div>
    <div className="search-btn">
        <button 
        type="search"
        onClick={onClick}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsZsjY46D3whfdkqeE3BvzAKy61374wBUGw&usqp=CAU" alt="search-btn" />
        </button>
    </div>
   
    </>
  );
};
export default Input;