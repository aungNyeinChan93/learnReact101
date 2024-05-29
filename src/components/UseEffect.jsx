import React, { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [post, setPost] = useState([]);

  const apiLink = "https://jsonplaceholder.typicode.com/posts";

  const fetching = async () => {
    const fetchData = await fetch(apiLink)
      // const responData = await fetchData.json();
      // console.log(respinData);
      .then((res) => res.json())
      .catch((error) => console.log(error.messaqge));
    setPost(fetchData);
  }
  
  useEffect(() => {
    fetching();
  });

  return (
    <div className="UseEffect container-fluid bg-body-secondary min-vh-100">
      <h1 className="useEffect-title fs-3 p-2 text-center bg-info-subtle rounded my-2 ">
        UseEffect
      </h1>
      <div className="container-md">
        {post.map((item, index) => {
          return (
            <div
              className="container-md bg-body-tertiary p-2 rounded my-3 shadow-lg"
              key={item.id}
            >
              <div className="list-container bg-danger-subtle rounded my-1 text-start d-flex align-items-center justify-content-center">
                <ul className="  d-flex justify-content-center align-items-center list-unstyled fst-italic text-start">
                  <li className="p-4 fs-6 text-muted ">{item.id}</li>
                  <li className="p-4 fs-6 text-muted ">{item.title}</li>
                  <li className="p-4 fs-6 text-muted ">{item.body}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffect;
