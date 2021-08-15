import React from 'react';
import {getPagesArray} from "../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className="pagination">
            {
                pagesArray.map( p =>
                    <span
                        key={p}
                        onClick={() => changePage(p)}
                        className={`pagination__button ${page === p && 'pagination__button--current'}`}
                    >{p}</span>
                )
            }
        </div>
    );
};

export default Pagination;