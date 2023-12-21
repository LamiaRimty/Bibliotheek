import React, { useState } from "react";
import "./AddBook.css";

const AddBook = () => {
  const [book, setbook] = useState({
    title: "",
    author: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setbook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(book);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
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
        Add
      </button>
    </div>
  );
};
export default AddBook;
