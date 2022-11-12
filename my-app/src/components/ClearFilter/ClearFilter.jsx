import React from "react";
import clean from './../../icons/clean.svg';
import "./../Users/users.css";

const ClearFilter = ({setClearButton, setSortDate, setSortRating, setFilterValue, users, setFiltered}) => {

    const getReset = (e) => {
        e.preventDefault();
        setFiltered(users)
        setClearButton(false);
        setSortDate(false);
        setSortRating(false);
        setFilterValue('');
    }
    return (
        <div className="clearFilter">
            <img src={clean} onClick={getReset}></img>
            <p onClick={getReset}>Очистить фильтр</p>
        </div>
    )
}

export default ClearFilter;