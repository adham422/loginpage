import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MockAdapter from "axios-mock-adapter";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// Create a mock instance for axios
const mock = new MockAdapter(axios);

// Mock the POST request to the login endpoint
mock.onPost("https://one-hand/login?uid=1231").reply(200, {
  token: "one-hand1234",
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
   
  }, []);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit() {
    const data = {
      email,
      password,
      uid: "1231",
    };
    console.log(data);

    const url = `https://one-hand/login?uid=1231`;

    axios
      .post(url, data, {
        headers: {
          "X-secret-key": "OH2024",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        console.log(response.data.token);
        Cookies.set("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <Form className="loginstyle" autocomplete="off">
        <img src="/logo.svg" alt="error"></img>
        <br></br>
        <h2 className="homestyle">Log In</h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="inpstyle">Email :</Form.Label>
          <Form.Control
            className="formstyle"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="inpstyle">Password :</Form.Label>
          <Form.Control
            className="formstyle"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        <br></br>
        <Button className="btnstyle" onClick={handleSubmit}>
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
