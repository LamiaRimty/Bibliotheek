// Home.js
import React, { useState } from "react";
import "./Home.css";
import Books from "../Books/Books";
import Feature from "../Feature/Feature";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
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
        <div className="container col-xxl-8 px-4 py-4">
          {/* <h2 className="search-results">Search Results</h2> */}
          <ul>
            {searchResults.map((book) => (
              <Link to={`/book/${book.id}`} key={book.id}>
                <h2 className="search-results">Your search results...</h2>
                <li key={book.id}>
                  <img
                    src={`http://localhost:8800/uploads/${book.cover}`}
                    alt={book.title}
                  />
                  <div>
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-author">Author: {book.author}</p>
                    <p className="card-price">Price: {book.price}</p>
                    <p className="card-desc">Description: {book.desc}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          {/* <Link to={`/book/${book.id}`} className="link" key={book.id}>
            <div className="col main animate__animated animate__zoomInUp">
              <ul className="cards">
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img
                        className="books-img"
                        src={`http://localhost:8800/uploads/${book.cover}`}
                        alt="card_image"
                      />
                    </div>
                    <div className="card_content">
                      <h2 className="card-title">{book.title}</h2>
                      <p className="card-author">{book.author}</p>
                      <p className="card-price">
                        <MdEuroSymbol />
                        {book.price}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Link> */}
        </div>
      </section>

      <Feature />
      <Books />
    </>
  );
}
export default Home;
