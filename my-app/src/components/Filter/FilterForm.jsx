import React from "react";
import { useState } from "react";
import './../Users/users.css';
import search from "./../../icons/search.svg"

const FilterForm = ({ filterUsers, filterValue, setFilterValue}) => {
    
    const keyupHandler = (e) => {
        e.preventDefault();
        filterUsers(filterValue);
    }

    return (
            <div className="search">
                <input placeholder="Поиск по имени или e-mail" onKeyUp={keyupHandler} value={filterValue} 
                onChange={(event) => {setFilterValue(event.target.value)}}
                className="search__field" />
                <img src={search} className="search__icon"></img>
            </div>
    )
    
}

export default FilterForm;