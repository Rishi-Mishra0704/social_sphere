import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <h3 className="mt-3">Recent Posts:</h3>
      <ListGroup className="mt-3" style={{ maxHeight: '600px', overflowY: 'auto' }}>
        {posts.map(post => (
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
