import "./Books.css";
import { useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setbooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="book-img" />}
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <p>{book.desc}</p>
            <span>{book.price}</span>

            <button
              className="delete-btn"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
            <button className="update-btn">
              <Link to={`/updatebook/${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="button">
        <Link to="/addbook">Add a new Book</Link>
      </button>
    </div>
  );
};

export default Books;
