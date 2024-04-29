import React, { useEffect, useState } from 'react'

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
      <div>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Posts
