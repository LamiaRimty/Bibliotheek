import "./Home.css";
// import Books from "../Books/Books";

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
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn home-btn btn-outline-light btn-lg"
                type="submit"
              >
                Search
              </button>
            </form>
            <p>Online book sharing platform</p>
          </div>
        </div>
      </section>

      {/* <Books /> */}
    </>
  );
}
export default Home;
