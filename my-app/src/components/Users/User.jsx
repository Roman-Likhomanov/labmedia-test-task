import React from "react";
import dateFormat from "dateformat";
import './../Users/users.css';
import cancel from './../../icons/cancel.svg';

let User = ({ user, setPopupActive, setDeleteUser }) => {

    let correctDate = () => {
    let date = new Date(user.registration_date);
    return dateFormat(date, "dd.mm.yy");
    }

    const clickCrossHandler = (e) => {
        e.preventDefault();
        setPopupActive(true);
        setDeleteUser(user);
        
    }

    return (
        <tr>
            <td className="name">{user.username}</td>
            <td>{user.email}</td>
            <td>{correctDate()}</td>
            <td>{user.rating}</td>
            <td onClick={clickCrossHandler}><img src={cancel}/></td>
        </tr>

    )
}

export default User;