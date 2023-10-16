import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import Footer from "./Footer";
import { Loader } from "./Loader";

export default function Blog() {
  const [blog, setBlog] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      await axios
        .get(
          `https://www.googleapis.com/blogger/v3/blogs/3771334625318012412/posts/${
            params.id
          }?key=${import.meta.env.VITE_API_KEY}`
        )
        .then((res) => setBlog(res.data))
        .catch((err) => err);
    };
    fetchBlog();
  }, []);
  return (
    <>
      <Navbar />
      {blog === null ? (
        <Loader />
      ) : (
        <div className="w-100">
          <div className="col-md-6 offset-md-3 p-3 mt-5 mb-5">
            <h1 className="mb-4" style={{ fontWeight: 600 }}>
              {blog.title}
            </h1>
            <a
              className="w-100 d-flex mb-4"
              target="_blank"
              href={`${blog.author.url}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <h3
                className="rounded-circle bg-warning d-flex justify-content-center align-items-center me-3"
                style={{ height: "70px", width: "70px" }}
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
            </a>
            <hr />
            <p
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
