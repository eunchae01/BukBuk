import React from "react";
import { Link } from "react-router-dom";
import '../../css files/Item.css';



const NewBookItem = props => {


  return (
    <>
    <li className="item-box">
      <div>
          <div>
            <img src={props.thumbnail} alt={props.thumbnail} />
          </div>
      </div>
    </li>
</>
  );
};

export default NewBookItem;


