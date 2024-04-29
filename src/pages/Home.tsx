import React, { useState } from "react";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
import { Button } from "react-bootstrap";

const Home = () => {
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowAddPostModal(true)}>
        Add Post
      </Button>
      <Posts />
      <AddPost showModal={showAddPostModal} setShowModal={setShowAddPostModal} />
    </>
  );
};

export default Home;
