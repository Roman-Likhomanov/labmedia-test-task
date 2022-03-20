import React from "react";
import clean from './../../icons/clean.svg';
import "./../Users/users.css";

const ClearFilter = ({setReset, reset, setClearButton, setSortDate, setSortRating, setFilterValue}) => {
const getReset = (e) => {
e.preventDefault();
setReset(!reset);
setClearButton(false);
setSortDate(false);
setSortRating(false);
setFilterValue('');
}
    return (
        <div className="clearFilter">
         <img src={clean} onClick={getReset}></img> 
         <p>Очистить фильтр</p>  
        </div>
    )
}

export default ClearFilter;