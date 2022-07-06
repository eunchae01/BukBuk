import React from "react";
import Menu from "../navibar/Menu";




function Search(props){
    const searchParams = props.location.search ;
        const url = new URLSearchParams(searchParams);
        const search =url.get('search');
        console.log(search);
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 집에가서 여기 부분 input 컴포넌트 코드 작성....
    //
    //
    //
    //
    //



    return(
        <div>
           <Menu/>        
           {/* <div>
        <ul className="item-box">
           {books.map((book, index) => (
              <Item
                  key={index}
                  thumbnail={book.thumbnail}
                  title={book.title}
                  blogname={book.blogname}
                  contents={book.contents}
                  url={book.url}
                  authors ={book.authors}
              />
           ))}
        </ul>
    </div> */}

        </div>
    )   
};

export default Search;

