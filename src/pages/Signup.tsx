import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../constants";
import useApi from "../hooks/useApi";

const SignUp: React.FC = () => {
  const {postData} = useApi<User>();
  const [user, setUser] = useState<User>({
    id: null,
    name: "",
    username: "",
    email: "",
    password: "",
    phone: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user data exists in local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array means this effect will only run once, after the first render

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    postData("https://662f9df543b6a7dce3102518.mockapi.io/api/users", user);
    // Redirect to Home after sign-up
    navigate(PageRoutes.Home);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <div className="text-center">
            <h2>Sign Up</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phone_no">
              <Form.Label>Phone no:</Form.Label>
              <Form.Control
                type="phone_no"
                name="phone_no"
                value={user.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
