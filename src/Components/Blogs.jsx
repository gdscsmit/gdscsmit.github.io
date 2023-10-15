import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Blogger API
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
      {/* Navbar */}
      <Navbar />
      <div className="blogPage">
        {/* Selector */}
        <div
          id="endcontain"
          className="container-fluid text-center position-sticky"
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
        {/* Map blogs list */}
        <ul className="my-5">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="list-unstyled mx-auto w-75"
              style={{ marginBottom: "3rem" }}
            >
              <div className="card text-center my-5">
                <div className="card-header h4">
                  <b>Penned by {blog.author.displayName}</b>
                </div>
                <div className="card-body">
                  <h5 className="card-title my-4 display-6">
                    <b>{blog.title}</b>
                  </h5>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  <a
                    href={blog.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Visit Blogger
                  </a>
                </div>
                <div className="card-footer text-body-secondary h5">
                  <b>Published at {blog.published}</b>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Footer */}
        <Footer className="blogFooter" />
      </div>
    </>
  );
}
