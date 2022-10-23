import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    alert(`Username: ${username}
    Email: ${email}
    password:${password}`);
  };
  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">CONTACT FORM</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={formValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-danger me-2">Submit</button>
        </div>
      </form>
      <hr /> <br />
        <div className="container text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-5"
          >
            Home
          </button>
          {/* <button onClick={()=> navigate(-1)} className="btn btn-success me-2">Home</button> */}
          <button
            onClick={() => navigate("/people")}
            className="btn btn-warning me-5"
          >
            People
          </button>
          <button onClick={() => Navigate(-1)} className="btn btn-info">
            Back
          </button>
        </div>
    </div>
  );
};

export default Contact;
