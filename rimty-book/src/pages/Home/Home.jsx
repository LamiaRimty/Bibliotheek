import "./Home.css";
import Books from "../Books/Books";
import Feature from "../Feature/Feature";
import Search from "../Search/Search";

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
          <Search />
          <div className="search-form animate__animated animate__zoomIn 2s"></div>
        </div>
      </section>
      <Feature />
      <Books />
    </>
  );
}
export default Home;
