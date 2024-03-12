// Home.js
import React, { useState } from "react";
import "./Home.css";
import Books from "../Books/Books";
import Feature from "../Feature/Feature";
import Search from "../Search/Search";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <>
      <section id="home">
        {/* <div className="container col-xxl-8 px-4 py-4"> */}
        <div className="cover  animate__animated animate__fadeInDown">
          <div className="overlay"></div>
          <img
            className="home-img"
            src="https://dreieck.com/en/wp-content/uploads/sites/2/2023/03/how-to-draw-a-book.jpg"
            alt="cover"
          />
          <div className="search-form animate__animated animate__zoomIn 2s">
            <div>
              <Search onSearchResults={handleSearchResults} />
            </div>
          </div>
        </div>
      </section>

      <section id="search-results">
        <div className="container">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((book) => (
              <li key={book.id}>
                <img src={book.cover} alt={book.title} />
                <div>
                  <h3>{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Price: {book.price}</p>
                  <p>Description: {book.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Feature />
      <Books />
    </>
  );
}
export default Home;
