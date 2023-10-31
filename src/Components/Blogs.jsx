import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const blogsUrl = `https://www.googleapis.com/blogger/v3/blogs/3771334625318012412/posts?key=${
      import.meta.env.VITE_API_KEY
    }`;

    axios
      .get(blogsUrl)
      .then((response) => {
        const blogsData = response.data.items;
        setBlogs(blogsData);
      })
      .catch((error) => {
        console.error("Error fetching Blogger blogs:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      {blogs.length === 0 ? (
        <Loader />
      ) : (
        <div className="blogPage">
          <div
            id="endcontain"
            className="container-fluid text-center mt-5"
            style={{
              backgroundColor: "white",
              position: "sticky",
              marginBottom: "5rem",
            }}
          >
            <strong>
              <font size="7">
                <font color="#4285F4">Explore. </font>
                <font color="#EA4335">Inspire. </font>
                <font color="#34A853"> Discover. </font>
              </font>
            </strong>
          </div>
          <div className="my-5 blogsContainer">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="card text-center shadow mx-auto p-4"
                style={{ maxWidth : "35rem", marginBottom: "3rem" }}
              >
                <div className="w-100 d-flex mb-4">
                  <h3
                    className="rounded-circle bg-warning d-flex justify-content-center align-items-center me-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    {blog.author.displayName[0]}
                  </h3>
                  <div className="d-flex flex-column text-start">
                    <span className="mb-2">
                      Written By <b>{blog.author.displayName}</b>
                    </span>
                    <small>
                      {moment(blog.published).startOf("hour").fromNow()}
                    </small>
                  </div>
                </div>
                <hr />
                <div className="card-body text-start">
                  <h5 className="card-title mb-3">
                    <b>{blog.title}</b>
                  </h5>
                  <p
                    className="blog-content card-text"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  <b
                    className="text-primary"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    READ MORE
                  </b>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer className="blogFooter" />
    </>
  );
}
