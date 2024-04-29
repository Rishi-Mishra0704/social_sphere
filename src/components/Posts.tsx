import React, { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import useApi from "../hooks/useApi";

const Posts = () => {
  const { data: posts, getData } = useApi<Post[]>(); // Utilize the useApi hook

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await getData("https://662f9df543b6a7dce3102518.mockapi.io/api/posts"); // Use the getData function from the useApi hook
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <h3 className="mt-3">Recent Posts:</h3>
      <ListGroup
        className="mt-3"
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        {posts &&
          posts.map((post) => (
            <ListGroup.Item key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  );
};

export default Posts;
