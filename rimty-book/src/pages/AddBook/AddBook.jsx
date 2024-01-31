import "./AddBook.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setbook] = useState({
    cover: null,
    title: "",
    author: "",
    price: "",
    desc: "",
  });

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setbook({ ...book, cover: e.target.files[0] });
  };
  const handleInputChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
  };

  // console.log(book);
  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", book.cover);
      formData.append("title", book.title);
      formData.append("time", book.author);
      formData.append("qoute", book.price);
      formData.append("desc", book.desc);
      await axios.post("http://localhost:8800/books", formData);
      navigate("/");
    } catch (error) {
      console.log("Error creating book:", error);
    }
  };

  return (
    <>
      <section id="addbook">
        <div className="container-compose">
          <div className="container">
            {/* {file && (
              <img
                className="composeImg"
                src={URL.createObjectURL(file)}
                alt="composeImg"
              />
            )} */}
          </div>
          <form className="composeForm" action="/submit" method="post">
            <div className="composeFormGroup flexCenter">
              <label>Cover Photo</label>
              <input
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
                className="composeBlog"
                type="file"
                autoFocus={true}
                name="cover"
              />
            </div>
            <div className="composeFormGroup">
              <label>Title</label>
              <input
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                name="title"
                placeholder="title"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Author</label>
              <input
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                placeholder="author"
                autoFocus={true}
                name="author"
              />
            </div>

            <div className="composeFormGroup">
              <label>Price</label>
              <input
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                placeholder="price"
                autoFocus={true}
                name="price"
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                onChange={handleInputChange}
                className="composeBlog"
                type="text"
                placeholder="Write a description..."
                cols="59"
                rows="10"
                name="desc"
              ></textarea>
            </div>

            <button
              className="button composeBlogBtn"
              type="submit"
              autoComplete="off"
              onClick={handleAddBook}
            >
              Publish
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddBook;
