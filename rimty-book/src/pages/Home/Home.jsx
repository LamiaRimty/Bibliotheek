import "./Home.css";
import Books from "../Books/Books";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <h1 className="intro animate__animated animate__zoomIn">
            Rimty Bibliotheek📚
          </h1>
          {/* <img src="./images/back.jpg" /> */}
        </div>
      </section>

      <Books />
    </>
  );
}
export default Home;
