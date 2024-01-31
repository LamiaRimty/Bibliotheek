import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Book.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const fetchBookDetails = async () => {
    const res = await axios.get(`http://localhost:8800/book/${id}`);
    setBook(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  useEffect(() => {
    fetchBookDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/book/${id}`, id);
      // window.location.reload();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(1);
    try {
      await axios.put(`http://localhost:8800/book/${id}`, {
        cover: book.cover,
        title,
        author: book.author,
        price: book.price,
        desc,
      });
      console.log(2);
      setUpdateMode(false);
      console.log(3);
    } catch (error) {
      console.log(4);
      console.log(error);
      console.log(5);
    }
    console.log(6);
  };
  return (
    <>
      <section id="book">
        {book ? (
          <article className="singleBook">
            <div className="container px-4 py-1 my-5 text-center" key={book.id}>
              <div>
                <img
                  className="book-img img-fluid border rounded-3 shadow-lg d-block  mx-auto mb-4"
                  src={`http://localhost:8800/uploads/${book.cover}`}
                  alt="book-img"
                />
              </div>
              {updateMode ? (
                <input
                  type="text"
                  value={title}
                  className="singleTitle"
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <>
                  <h1 className="singleTitle">{title}</h1>
                </>
              )}

              <div className="authorprice-edit d-flex">
                <p className="author">📝{book.author}</p>
                <p className="price">💵 {book.price}</p>
                <div className="buttons bookEdit">
                  <button
                    className="btn update-btn"
                    onClick={() => setUpdateMode(true)}
                  >
                    <BsPencilSquare />
                  </button>

                  <button className="btn delete-btn" onClick={handleDelete}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>

              {updateMode ? (
                <textarea
                  className="singlePostDesc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              ) : (
                <p className="singlePostDesc">{desc}</p>
              )}
              {/* <p className="desc">{blogPost.desc}</p> */}
              {updateMode && (
                <button className="bookEditButton" onClick={handleUpdate}>
                  Update
                </button>
              )}
            </div>
          </article>
        ) : null}
      </section>
    </>
  );
}

export default Book;
