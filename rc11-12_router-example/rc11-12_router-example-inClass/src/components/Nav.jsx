import logo from "../img/logo.png";
import {Link, NavLink} from "react-router-dom"

// Link NavLink farkı active olup olmadığını fark etmesidir. yani tıklandı mı, tıklanmadı mı? renk değişiyor. NavLinkte style={({ isActive }) probu var, Aşağıdaki örnekte navlink yapıldı, tıklanmışlar ise renk kırmızı olacak. fakat 6.4 ten dolayı home herzaman kırmızı, yeniden yarn add reac-router-dom@6.3 yapıp yarn start yapınca düzeldi..

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })}
                to="/people"
                className="nav-link"
                aria-current="page"
              >
                People
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })} to="/paths" className="nav-link" aria-current="page">
                Paths
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive && "red",
                })} to="/contact" className="nav-link" aria-current="page">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
