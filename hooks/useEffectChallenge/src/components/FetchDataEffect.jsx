import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post Title: </h1>
      {posts.length > 0 ? (
        <h2>{posts[Math.floor(Math.random() * 100)].title}</h2>
      ) : (
        <h2>Loading.......</h2>
      )}
    </div>
  );
};

export default FetchDataEffect;
