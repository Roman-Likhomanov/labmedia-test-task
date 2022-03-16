import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import Users from './components/Users/Users';
import './components/Users/users.css';

const App = () => {

  const [users, setUsers] = useState([]);
  const [directionSort, setDirectionSort] = useState(true);
  const [activeSort, setActiveSort] = useState('');
  const [sortDate, setSortDate] = useState(false);
  const [sortRating, setSortRating] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [totalCountRows, setTotalCountRows] = useState(0);
  const [totalCountPages, setTotalCountPages] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentPageActive, setCurrentPageActive] = useState('');
  const [deleteUser, setDeleteUser] = useState({});
  const [popupActive, setPopupActive] = useState(false);
  const [clearButton, setClearButton] = useState(false);
  const [reset, setReset] = useState(false);
  const limitCountPage = 5;

  useEffect(() => {
    axios.get("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
      .then(response => {
        setUsers(response.data);
      });
  }, [reset]);

  useEffect(() => {
    setFiltered(users);
  }, [users]);

  useEffect(() => {
    setTotalCountRows(filtered.length);
    setTotalCountPages(Math.ceil(totalCountRows/limitCountPage))
  }, [filtered, totalCountRows]);

  let pages = [];
  for(let i=1; i<=totalCountPages; i++) {
    pages.push(i);
  }

  const currentPage = (pg) => {
    setCurrentPageNumber(pg);
    setCurrentPageActive("active");
  }
 
  const lastBlockRow = currentPageNumber * limitCountPage;
  const firstBlockRow = lastBlockRow - limitCountPage;
  const currentBlockRows = filtered.slice(firstBlockRow, lastBlockRow);

  const onNextClick = () => {
    if(currentPageNumber > totalCountPages-1) {
      return
    }
    setCurrentPageNumber(currentPageNumber + 1);
  }

  const onPreviousClick = () => {
    if(currentPageNumber < 2) {
      return
    }
    setCurrentPageNumber(currentPageNumber - 1);
  }

  const sortData = (field) => {
    setClearButton(true);
    setActiveSort("active");

    const copyData = users.concat();
    let sortCopy;

    if (directionSort) {
      sortCopy = copyData.sort(
        (a, b) => { return a[field] < b[field] ? 1 : -1 }
      );
    } else {
      sortCopy = copyData.reverse(
        (a, b) => { return a[field] < b[field] ? 1 : -1 }
      );
    }

    setUsers(sortCopy);
    setDirectionSort(!directionSort);
  };

  const filterUsers = (filterValue) => {
    if (!filterValue) {
      return;
    } else {
      setClearButton(true);
      return setFiltered(
        users.filter(
          el => {
            return (el.username.toLowerCase().includes(filterValue.toLowerCase())
              || el.email.toLowerCase().includes(filterValue.toLowerCase())
            )
          }
        )
      )
    }
  }

  const getDeleteUser = () => {
    const newUsers = users.filter((el) => { return el != deleteUser });
    setUsers(newUsers);
    
  }

  return <>
    <Users
      sortData={sortData}
      activeSort={activeSort}
      sortDate={sortDate}
      setSortDate={setSortDate}
      sortRating={sortRating}
      setSortRating={setSortRating}
      filterUsers={filterUsers}
      filtered={currentBlockRows}
      pages={pages}
      currentPage={currentPage}
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      currentPageActive={currentPageActive}
      currentPageNumber={currentPageNumber}
      setDeleteUser={setDeleteUser}
      getDeleteUser={getDeleteUser}
      popupActive={popupActive}
      setPopupActive={setPopupActive}
      clearButton={clearButton}
      setReset={setReset}
      setClearButton={setClearButton}
    />
  </>
}

export default App;
