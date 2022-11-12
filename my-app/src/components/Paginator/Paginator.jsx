import React from 'react';
import './../Users/users.css';

const Paginator = ({ pages, currentPage, onNextClick, onPreviousClick, currentPageNumber }) => {
    return (
        <div>
            <ul className="pagination">
                <li>
                    <a href="#" onClick={() => { onPreviousClick() }}>Previous</a>
                </li>
                {pages.map(p => {
                    return <li key={p}>
                        <a className={(currentPageNumber === p) ? "active" : null} href="#" onClick={() => { currentPage(p) }}>{p}</a>
                    </li>
                })
                }
                <li>
                    <a href="#" onClick={() => { onNextClick() }}>Next</a>
                </li>
            </ul>
        </div>
    )
}

export default Paginator;