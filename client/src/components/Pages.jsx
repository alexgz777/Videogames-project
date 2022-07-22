import React from "react";
import "../styles/Pages.css";

export default function Pages({
  currentPage,
  GamesPerPage,
  videogames,
  pages,
}) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(videogames / GamesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <>
      <ul className="numeroPaginas">
        <li className="numero">
          <button
            onClick={() => pages(currentPage - 1)}
            className="btn"
            key={currentPage - 1}
          >
            {"<"}
          </button>
          {pageNumber &&
            pageNumber.map((number) => {
              return (
                <button
                  className="btn"
                  onClick={() => pages(number)}
                  key={number}
                >
                  {number}
                </button>
              );
            })}
          <button
            onClick={() => pages(currentPage + 1)}
            className="btn"
            key={currentPage + 1}
          >
            {">"}
          </button>
        </li>
      </ul>
    </>
  );
}
