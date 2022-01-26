import React, { useState, useEffect } from "react";

function Backend() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPosts(resp));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {posts.map((post) => (
        <div
          style={{
            maxWidth: "270px",
            textAlign: "left",
            height: 400,
            margin: 30,
            background: "#f9f9f9",
            boxShadow: "0px 1px 15px #aaa",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "200px",
              objectFit: "cover",
            }}
            src={post.url}
            alt=""
          />
          <h1
            style={{
              fontSize: 20,
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: 2,
              margin: 20,
              color: "#555",
            }}
          >
            {post.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Backend;
