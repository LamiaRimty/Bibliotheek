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

  return (
    <section id="books">
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <Link to={`/book/${book.id}`} className="link" key={book.id}>
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
                        <p className="card-price">{book.price}</p>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <button
                className="delete-btn"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
              <button className="update-btn">
                <Link to={`/updatebook/${book.id}`}>Update</Link>
              </button> */}
              </div>
            </Link>
          ))}
        </div>
        {/* <button className="button">
        <Link to="/addbook">Add a new Book</Link>
      </button> */}
      </div>
    </section>
  );
};

export default Books;
