import React, { useState, useEffect, useMemo } from "react";
import useApi from "../hooks/useApi";
import { Container, ListGroup, Form, Modal, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { data: users, getData } = useApi<User[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await getData("https://662f9df543b6a7dce3102518.mockapi.io/api/users");
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [getData]);

  const filteredUsers = useMemo(() => {
    // Filter users based on search term
    if (!users) return [];
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const handleUserClick = (user: User) => {
    console.log(user); // Log user info when clicked
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
    setShowModal(false);
    }
  };

  return (
    <Container>
      <Button
        className="d-flex align-items-center mt-4 mb-4"
        onClick={() => setShowModal(true)}
      >
        <FaSearch className="mr-4" />
        <span>Search</span>
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Search Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search by username"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-100"
              style={{ maxWidth: "300px" }}
              onKeyDown={handleKeyPress} // Listen for keydown event
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ListGroup style={{ maxHeight: "600px", overflowY: "auto" }}>
        {filteredUsers.map((user) => (
          <ListGroup.Item
            key={user.id}
            onClick={() => handleUserClick(user)}
            style={{ cursor: "pointer" }}
          >
            <strong>{user.name}</strong>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Search;
