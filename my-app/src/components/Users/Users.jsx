import React, { useState } from 'react';
import ClearFilter from '../ClearFilter/ClearFilter';
import DeleteUserPopup from '../DeleteUser/DeleteUserPopup';
import FilterForm from '../Filter/FilterForm';
import Paginator from '../Paginator/Paginator';
import User from './User';
import './users.css';

let Users = ({ filtered,
    sortData,
    activeSort,
    sortDate,
    setSortDate,
    sortRating,
    setSortRating,
    filterUsers,
    pages,
    currentPage,
    onNextClick,
    onPreviousClick,
    currentPageActive,
    currentPageNumber,
    setDeleteUser,
    getDeleteUser,
    popupActive,
    setPopupActive,
    clearButton,
    setReset,
    reset,
    setClearButton }) => {

    const [filterValue, setFilterValue] = useState('');

    const fieldSortDataDate = (field) => {
        sortData(field);
        setSortRating(false);
        setSortDate(true);
    }

    const fieldSortDataRating = (field) => {
        sortData(field);
        setSortDate(false);
        setSortRating(true);
    }

    return <div className="container">
        <h1>Список пользователей</h1>
        <div className="filter">
            <FilterForm filterValue={filterValue} setFilterValue={setFilterValue} filterUsers={filterUsers} />
            {clearButton ? <ClearFilter setReset={setReset}
                reset={reset}
                setClearButton={setClearButton}
                setSortDate={setSortDate}
                setSortRating={setSortRating}
                setFilterValue={setFilterValue}
            /> : null}
        </div>
        <div className="sort">
            <p>Сортировка:</p>
            <div className={sortDate ? activeSort : null} onClick={() => { fieldSortDataDate('registration_date') }}>Дата регистрации</div>
            <div className={sortRating ? activeSort : null} onClick={() => { fieldSortDataRating('rating') }}>Рейтинг</div>
        </div>
        <div className="containerTable">
            <table className="table">
                <thead>
                    <tr>
                        <td className="tdName">Имя пользователя</td>
                        <td className="tdMail">E-mail</td>
                        <td className="tdDate">Дата регистрации</td>
                        <td>Рейтинг</td>
                        <td> </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map(e => <User user={e}
                            setPopupActive={setPopupActive}
                            setDeleteUser={setDeleteUser}
                            key={e.username}
                        />)
                    }
                </tbody>
            </table>
        </div>
        <Paginator pages={pages}
            currentPage={currentPage}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
            currentPageActive={currentPageActive}
            currentPageNumber={currentPageNumber} />
        <DeleteUserPopup popupActive={popupActive} setPopupActive={setPopupActive}
            getDeleteUser={getDeleteUser} />
    </div>
}

export default Users;