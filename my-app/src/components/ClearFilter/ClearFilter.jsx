import React from "react";
import clean from './../../icons/clean.svg';
import "./../Users/users.css";

const ClearFilter = ({setReset, setClearButton, setSortDate, setSortRating}) => {
const reset = (e) => {
e.preventDefault();
setReset(true);
setClearButton(false);
setSortDate(false);
setSortRating(false);
}
    return (
        <div className="clearFilter">
         <img src={clean} onClick={reset}></img> 
         <p>Очистить фильтр</p>  
        </div>
    )
}

export default ClearFilter;