import "./Header.css";

const Header = () => {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <a className="navbar-brand animate__animated animate__flip" href="/">
            <img
              id="header-img"
              height="10"
              src="images/rimty-logo.png"
              alt="rimty"
            />{" "}
            Bibliotheek
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0"> */}
              <li className="nav-item">
                <a
                  id="activelink"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/feature">
                  Feature
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/books">
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addbook">
                  Add Book
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/addbook">
                  Update Book
                </a>
              </li>
            </ul>
            <ul className="d-flex navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
