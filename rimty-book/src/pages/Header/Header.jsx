import "./Header.css";

const Header = () => {
  return (
    <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div class="col-md-3 mb-2 mb-md-0">
          <a
            className="navbar-brand animate__animated animate__flip d-inline-flex link-body-emphasis text-decoration-none"
            href="/"
          >
            <img
              id="header-img"
              height="30"
              src="images/rimty-logo.png"
              alt="rimty"
            />
          </a>
        </div>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/#" class="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="/books" class="nav-link px-2">
              Books
            </a>
          </li>
          <li>
            <a href="/add book" class="nav-link px-2">
              Add book
            </a>
          </li>
          <li>
            <a href="/" class="nav-link px-2">
              Update book
            </a>
          </li>
          <li>
            <a href="/" class="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" class="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
