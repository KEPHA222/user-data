import React from "react";
import Photos from "@components/Photos";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Your User Data</span>
    </h1>
    <p className="desc text-center">
      JSONPlaceholder is a free online REST API that you can use whenever you
      need some fake data.
    </p>

    <Photos />
  </section>
);

export default Home;
