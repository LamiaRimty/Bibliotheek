// Search.js
import "./Search.css";
import React, { useState } from "react";
import axios from "axios";

function Search({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/search?q=${searchQuery}`
      );
      onSearchResults(response.data);
    } catch (error) {
      console.error("Error searching books:", error);
      setError(error.message); // Set error state with error message
    }
  };

  return (
    <section id="Search">
      <div className="container col-xxl-8 px-2 py-3">
        <div className="search-form-content">
          <h1 className="search-form-title">What's Your Book of Choice?</h1>
          <div className="search-form">
            <input
              placeholder="Write your book name here.."
              className="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </section>
  );
}

export default Search;
