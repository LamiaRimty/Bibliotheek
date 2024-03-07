// SearchForm.js
import { useState } from "react";
import axios from "axios"; // Assuming you use Axios for HTTP requests
import "./SearchForm.css";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?term=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error occurred while searching:", error);
    }
  };

  return (
    <>
      <section id="searchForm">
        <h1 className="home-title">What's yourbook of choice?</h1>
        <div className="search-container"></div>
      </section>
    </>
  );
}

export default SearchForm;
