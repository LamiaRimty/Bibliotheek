// Search.js
import "./Search.css";
import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/search?q=${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching books:", error);
      setError(error.message); // Set error state with error message
    }
  };

  return (
    <section id="Search">
      <div className="search-container col-xxl-8 px-2 py-3 ">
        <h1 className="search-title">What's your book choice?</h1>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
        {error && <div className="error">{error}</div>}
        <ul>
          {searchResults.map((book) => (
            <li key={book.id} className="bookfound">
              {/* <img src={book.cover} alt={book.title} /> */}
              <img
                className="search-img"
                src={`http://localhost:8800/uploads/${book.cover}`}
                alt="search-img"
              />
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
  );
}

export default Search;
