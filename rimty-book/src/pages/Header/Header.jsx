import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { currentUser, logout } = useAuth();
  console.log("Current user in Header:", currentUser);

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
              {!currentUser && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      Signup
                    </Link>
                  </li>
                </>
              )}
              {currentUser && (
                <>
                  <li className="nav-item">
                    <div className="nav-link">
                      <img
                        // src={currentUser.photoUrl}
                        src="https://s3.amazonaws.com/cdn.tulips.com/images/large/Timeless-Tulip.jpg"
                        alt="Profile"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                      <span className="current-name">
                        {" "}
                        {currentUser.username}
                      </span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>
                      {" "}
                      Logout
                    </button>
                  </li>
                </>
              )}
              {/* <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  Signup
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
