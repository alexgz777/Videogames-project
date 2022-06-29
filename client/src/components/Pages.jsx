import React from "react";
import "../styles/Pages.css";

export default function Pages({ GamesPerPage, videogames, pages }) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(videogames / GamesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <>
      <ul className="numeroPaginas">
        <li className="numero">
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
        </li>
      </ul>
    </>
  );
}
