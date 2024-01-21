import "./Header.css";

const Header = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg bg-body-">
        <div class="container-fluid">
          <a class="navbar-brand animate__animated animate__flip" href="/">
            <img
              id="header-img"
              height="10"
              src="images/rimty-logo.png"
              alt="rimty"
            />{" "}
            Bibliotheek
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/books">
                  Books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/addbook">
                  Add Book
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/addbook">
                  Update Book
                </a>
              </li>
            </ul>
            <ul class="d-flex navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/books">
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
