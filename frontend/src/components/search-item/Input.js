import React, { useEffect, useState } from "react";
import { bookSearch} from "./api";
import "../../css files/Input.css";
import Item from "./Item";
import { useHistory } from "react-router-dom";

const Input = props => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);


  // 신간도서 코드
  // useEffect(() => {
  //   if (query.length > 0) {
  //     recentBookHttpHandler(query, true);
  //   }
  // }, [query]);

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
    
  };



let history = useHistory()



  const onEnter = e => {
    if (e.keyCode === 13)  {
      setQuery(text);
  };
  setTimeout(()=>{
    history.push(`/search?search=${text}`);
  },2000)

}
  const onClick = () =>{
    if(window.location.pathname === '/'){
      setQuery(text);
    }
    setTimeout(()=>{
      history.push(`/search?search=${text}`);
    },2000)

  }
  






  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: 'accuracy', // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 20 // 한 페이지에 보여 질 문서의 개수
    };

    // 책의 정보
    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents); //책 정보들이 콘솔창에 띄워짐.
    } else {
      setBooks(books.concat(data.documents));
    }
  };


  // 신간도서 코드
//   const recentBookHttpHandler = async  (query, reset) => {
//     const params = {
//       query: query,
//       sort: 'accuracy', // accuracy | recency 정확도 or 최신
//       page: 1, // 페이지번호
//       size: 20 // 한 페이지에 보여 질 문서의 개수
//     };

//   // const { data } = await recentBook(params);
//   // if (reset) {
//   //   setBooks(data.documents); //책 정보들이 콘솔창에 띄워짐.
//   // } else {
//   //   setBooks(books.concat(data.documents));
//   // }
// };
  // console.log(window.location.pathname)
  // console.log(books);
  
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