import React from "react";
import './../Users/users.css';

const DeleteUserPopup = ({ popupActive, setPopupActive, getDeleteUser }) => {

    const closeHandler = (e) => {
        e.preventDefault();
        setPopupActive(false);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        getDeleteUser();
        setPopupActive(false);
    }

    return (
        <div className={popupActive ? "popup active" : "popup"} onClick={closeHandler}>
            <div className={popupActive ? "popup__content active" : "popup__content"} onClick={e => e.stopPropagation()}>
                <p>Вы уверены, что хотите удалить пользователя?</p>
                <form className="popup__form">
                    <input onClick={deleteHandler} type="submit" value="Да" />
                    <input onClick={closeHandler} type="submit" value="Нет" />
                </form>
            </div>
        </div>
    )
}

export default DeleteUserPopup;