import React from "react";
import mountainImg1 from "../../assets/mountain1.jpg";
import mountainImg2 from "../../assets/mountain2.jpg";
import { MdOutlinePreview } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const featuredBlogs = () => {
  return (
    <div className="featuredBlogs-container">
      <div className="featuredBlogs-wrapper">
        <h3>Featured Blogs</h3>
        <div className="featuredBlogs-blogs">
          <div className="featuredBlogs-mainBlog">
            <img src={mountainImg1} alt="" />
            <div className="featuredBlogs-mainBlogData">
              <div className="featuredBlogs-categoryAndMetadata">
                <span className="featuredBlogs-category">Nature</span>
                <div className="featuredBlogs-metadata">
                  <MdOutlinePreview /> 123 views
                </div>
                <div className="featuredBlogs-metadata">
                  <AiFillLike /> 100 likes
                </div>
              </div>
              <h4>Blog 1 title</h4>
              <p className="featuredBlogs-blogDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                corrupti harum quidem.
              </p>
              <div className="featuredBlogs-authorAndCreatedAt">
                <span>
                  <span>Author:</span> Villy
                </span>
                <span>
                  <span>Created:</span> 27-02-2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredBlogs-right">
          <div className="featuredBlogs-secondaryBlog">
            <img src={mountainImg2} alt="" />
            <div className="featuredBlogs-secondaryBlogData">
              <h4>Blog 2 title</h4>
              <p className="featuredBlogs-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
                hic inventore? Atque?
              </p>
              <div className="featuredBlogs-authorAndCreatedAt">
                <span>
                  <span>Author:</span> Villy
                </span>
                <span>
                  <span>Created:</span> 27-02-2023
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="featuredBlogs-secondaryBlog">
          <img src={mountainImg2} alt="" />
          <div className="featuredBlogs-secondaryBlogData">
            <h4>Blog 3 title</h4>
            <p className="featuredBlogs-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              hic inventore? Atque?
            </p>
            <div className="featuredBlogs-authorAndCreatedAt">
              <span>
                <span>Author:</span> Villy
              </span>
              <span>
                <span>Created:</span> 27-02-2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuredBlogs;
