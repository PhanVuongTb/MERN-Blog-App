import React from "react";
import Categories from "../components/Categories";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Newsletter from "../components/Newsletter";

const home = () => {
  return (
    <div>
      <FeaturedBlogs />
      <Categories />
      <Newsletter />
    </div>
  );
};

export default home;
