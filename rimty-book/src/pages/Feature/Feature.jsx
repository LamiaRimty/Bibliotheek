// eslint-disable-next-line
import "./Feature.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdEuroSymbol } from "react-icons/md";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Feature() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setbooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <section id="feature">
      <h2 className="section-title">Feature books</h2>
      <span className="section-subtitle">Some of my favourite books!</span>
      <div className="container feature-container col-xxl-8 px-2 py-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="feature-box">
                <Link to={`/book/${book.id}`} className="link" key={book.id}>
                  <img
                    className="feature-img"
                    src={`http://localhost:8800/uploads/${book.cover}`}
                    alt="feature_image"
                  />

                  <div className="feature-info">
                    <h4 className="feature-title">{book.title}</h4>
                    <small className="feature-author">{book.author}</small>
                    <h5 className="feature-price">
                      {book.price} <MdEuroSymbol />
                    </h5>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
