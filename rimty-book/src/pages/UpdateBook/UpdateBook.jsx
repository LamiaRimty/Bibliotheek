import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UpdateBook.css";

const UpdateBook = () => {
  const [book, setbook] = useState({
    title: "",
    author: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setbook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="author"
        onChange={handleChange}
        name="author"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />

      <button className="button" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default UpdateBook;
