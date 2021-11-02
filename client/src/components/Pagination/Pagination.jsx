import React from 'react';
import "./Pagination.css";

function Pagination({ videogamesPerPage, totalVideogames, paginate }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalVideogames / videogamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="pagination-background">
            <ul className="pages">
                {
                    pageNumbers.map((number) =>
                        <button key={number} onClick={() => paginate(number)}>{number}</button>
                    )
                }
            </ul>
        </nav>
    )
};

export default Pagination;
