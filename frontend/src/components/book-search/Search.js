import React,{useState , useEffect} from "react";
import Menu from "../navibar/Menu";
import {bookSearch} from '../search-item/api';
import "../../css files/book-search.css";
import Item from "../search-item/Item";
import Slide from '../slide/Slide';


function Search(props){

    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
  


    // useEffect(() => {
    //     if (query.length > 0) {
    //       bookSearchHttpHandler(query, true);
    //     }
    //   }, [query]);


    useEffect(()=>{
        const searchParams = props.location.search ;
        const url = new URLSearchParams(searchParams);
        const search =url.get('search');
        setQuery(search)
        console.log({query})
        if (query.length > 0) {
        bookSearchHttpHandler(query, true);
        }}, [{query}] )
      


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




    return(
        <div>
           <Menu/>
           <Slide/>        
           <div>
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
            </div>

        </div>
    )   
};

export default Search;

