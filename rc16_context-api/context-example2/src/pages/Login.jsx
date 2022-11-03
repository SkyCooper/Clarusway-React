import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../context/LoginContext";
import { useLoginContext } from "../context/LoginProvider";

const Login = () => {
  const navigate = useNavigate();
  // const { user, setUser } = useContext(LoginContext);
  //! gerek kalmadı, tek yerden import yeterli olur.
  const { user, setUser } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(user);

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email || ""}
            //! konsolda undefined value hatasını engellemek için yaptı.
            //! unefined gelirse null olsun demek, genellikle nested obje yapısında kullanılan inputlarda karşılaşılır.
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password || ""}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
