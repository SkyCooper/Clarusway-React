import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
// import { useContext } from "react";
// import { LoginContext } from "../context/LoginContext";
import { useLoginContext } from "../context/LoginProvider";

function Navs() {
  //! consuming
  // const { user, setUser } = useContext(LoginContext);
  const { user, setUser } = useLoginContext()
  //? burada login olduysa navbarda ki yazı logout dönüşüyor, onu kontrol etmek için,
  //? contexten user versini çekiyoruz. ve conditional rendiring yapıyoruz.
  //! ayrıca logout olduğunda user verisini silmek/sıfırlamak için setUser da lazım.
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-1024x265.png"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>
            {!user.email ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link
                onClick={() => setUser({ email: "", password: "" })}
                //! yani logout olursa email/password bilgilerini sıfırla.
                className="nav-link"
                to="/login"
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
