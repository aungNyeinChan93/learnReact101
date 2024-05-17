import React from "react";
import { useState } from "react";

const UseEffect = () => {
  const [post, setPost] = useState([]);

  const apiLink = "https://jsonplaceholder.typicode.com/posts";

  const fetching = async () => {
    const fetchData = await fetch(apiLink)
      // const responData = await fetchData.json();
      // console.log(respinData);
      .then((res) => res.json())
      .catch((error) => console.log(error.message));
    setPost(fetchData);
    // console.log(post);€
  };
  fetching();

  return (
    <div className="UseEffect container-fluid bg-body-secondary min-vh-100">
      <h1 className="useEffect-title fs-3 p-2 text-center bg-info-subtle rounded my-2 ">
        UseEffect
      </h1>
      <div className="container-md">
        {post.map((item, index) => {
          return (
            <div className="container-md bg-body-tertiary p-3 rounded mt-3">
              <div className="table-container bg-danger-subtle rounded my-1 ">
                <tr className="">
                  <td className="p-3 fs-6 text-muted ">{item.id}</td>
                  <td className="p-3 fs-6 text-muted ">{item.title}</td>
                  <td className="p-3 fs-6 text-muted ">{item.body}</td>
                </tr>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffect;
