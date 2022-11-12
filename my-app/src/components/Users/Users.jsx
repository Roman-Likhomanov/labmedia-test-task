import React, {useState} from 'react';
import ClearFilter from '../ClearFilter/ClearFilter';
import DeleteUserPopup from '../DeleteUser/DeleteUserPopup';
import FilterForm from '../Filter/FilterForm';
import Paginator from '../Paginator/Paginator';
import User from './User';
import './users.css';

let Users = ({
                 currentBlockRows,
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
                 currentPageNumber,
                 setDeleteUser,
                 getDeleteUser,
                 popupActive,
                 setPopupActive,
                 clearButton,
                 setReset,
                 setClearButton,
                 users,
                 setFiltered
             }) => {

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
            <FilterForm filterValue={filterValue} setFilterValue={setFilterValue} filterUsers={filterUsers}/>
            {clearButton ? <ClearFilter setReset={setReset}
                                        setClearButton={setClearButton}
                                        setSortDate={setSortDate}
                                        setSortRating={setSortRating}
                                        setFilterValue={setFilterValue}
                                        users={users}
                                        setFiltered={setFiltered}
            /> : null}
        </div>
        <div className="sort">
            <p>Сортировка:</p>
            <div className={sortDate ? "active" : null} onClick={() => {
                fieldSortDataDate('registration_date')
            }}>Дата регистрации
            </div>
            <div className={sortRating ? "active" : null} onClick={() => {
                fieldSortDataRating('rating')
            }}>Рейтинг
            </div>
        </div>
        <div className="containerTable">
            <table className="table">
                <thead>
                <tr>
                    <td className="tdName">Имя пользователя</td>
                    <td className="tdMail">E-mail</td>
                    <td className="tdDate">Дата регистрации</td>
                    <td>Рейтинг</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {
                    currentBlockRows.map(e => <User user={e}
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
                   currentPageNumber={currentPageNumber}/>
        <DeleteUserPopup popupActive={popupActive} setPopupActive={setPopupActive}
                         getDeleteUser={getDeleteUser}/>
    </div>
}

export default Users;