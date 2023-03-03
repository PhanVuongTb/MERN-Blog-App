import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { request } from "../utils/fetchApi";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { MdOutlinePreview } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

const categories = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    "all",
    "nature",
    "music",
    "travel",
    "design",
    "programming",
    "fun",
    "fashion",
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await request("/blog/getAll", "GET");
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs((prev) => {
        const filteredBlogs = blogs.filter(
          (blog) => blog.category.toLowerCase() === activeCategory.toLowerCase()
        );

        return filteredBlogs;
      });
    }
  }, [activeCategory]);

  return (
    <>
      <div className="categories-container">
        <div className="categories-wrapper">
          <h3>Select a category</h3>
          <div className="categories-categoriesAndBlogs">
            <div className="categories-categories">
              {categories.map((category) => (
                <span
                  key={crypto.randomUUID()}
                  className="categories-category"
                  onClick={() => setActiveCategory((prev) => category)}
                >
                  {category}
                </span>
              ))}
            </div>
            {filteredBlogs?.length > 0 ? (
              <div className="categories-blogs">
                {filteredBlogs?.map((blog) => (
                  <div key={blog._id} className="categories-blog">
                    <Link to={`/blogDetails/${blog?._id}`}>
                      <img
                        src={`http://localhost:5000/images/${blog?.photo}`}
                      />
                    </Link>
                    <div className="categories-blogData">
                      <div className="categories-categoryAndMetadata">
                        <span className="categories-category">
                          {blog?.category}
                        </span>
                        <div className="categories-metadata">
                          <MdOutlinePreview /> {blog.views} views
                        </div>
                        <div className="categories-metadata">
                          <AiFillLike /> {blog?.likes?.length} likes
                        </div>
                      </div>
                      <h4>{blog?.title}</h4>
                      <p className="categories-blogDesc">{blog?.desc}</p>
                      <div className="categories-authorAndCreatedAt">
                        <span>
                          <span>Author:</span> {blog?.userId?.username}
                        </span>
                        <span>
                          <span>Created:</span> {format(blog?.createdAt)}
                        </span>
                      </div>
                      <Link
                        to={`/blogDetails/${blog._id}`}
                        className="categories-readMore"
                      >
                        Read More <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3 className="categories-noBlogsMessage">No blogs</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default categories;
