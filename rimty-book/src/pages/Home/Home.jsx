import "./Home.css";
import Books from "../Books/Books";
import Feature from "../Feature/Feature";
import { FaSearch } from "react-icons/fa";
// import searchForm from "../searchForm/searchForm";

function Home() {
  return (
    <>
      <section id="home">
        {/* <div className="container col-xxl-8 px-4 py-4"> */}
        <div className="cover  animate__animated animate__fadeInDown">
          <div className="overlay"></div>

          <img
            className="home-img"
            src="./images/book-shelf-landscape.jpg"
            alt="cover"
          />
          <h1 className="home-title">What's yourbook of choice?</h1>

          <div className="search-form animate__animated animate__zoomIn 2s">
            <div className="container">
              <div className="search-form-content">
                <form className="search-form">
                  <div className="search-form-elem flex flex-sb bg-white">
                    <input
                      className="form-control "
                      //me-2
                      type="text"
                      placeholder="Whgat's on your mind?"
                      aria-label="Search"
                    />
                    <button type="submit" className="flex flex-c" size={32}>
                      {" "}
                      <FaSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="content animate__animated animate__zoomIn 2s">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn home-btn btn-outline-light btn-lg"
                type="submit"
              >
                Search
              </button>
            </form>
            <p>Online book sharing platform</p>
          </div> */}
        </div>
      </section>
      <Feature />
      <Books />
    </>
  );
}
export default Home;
