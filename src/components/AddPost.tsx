import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import useApi from "../hooks/useApi";
import generatePostId from "../utils/generate-postId";

interface AddPostProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPost: React.FC<AddPostProps> = ({ showModal, setShowModal }) => {
  const { postData } = useApi<Post>();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = generatePostId(); // Generate post id
    try {
      const newPost = { userId: 1, id, title, body };
      console.log("New post:", newPost);

      const addedPost = await postData(
        "https://662f9df543b6a7dce3102518.mockapi.io/api/posts",
        newPost
      );
      console.log("Added post:", addedPost);
      setTitle("");
      setBody("");
      setShowModal(false);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Post
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;
