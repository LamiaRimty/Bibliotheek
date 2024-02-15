import "./Home.css";
import Books from "../Books/Books";
import Feature from "../Feature/Feature";

function Home() {
  return (
    <>
      <section id="home">
        {/* <div className="container col-xxl-8 px-4 py-4"> */}
        <div className="cover animate__animated animate__fadeInDown">
          <div className="overlay"></div>
          <img
            className="home-img"
            src="./images/book-shelf-landscape.jpg"
            alt="cover"
          />
          <div className="content animate__animated animate__zoomIn 2s">
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
          </div>
        </div>
      </section>
      <Feature />
      <Books />
    </>
  );
}
export default Home;
