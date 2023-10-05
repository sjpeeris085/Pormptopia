import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Pormptopia is an open-source API prompting tool for modern world to
        discover, create and share creating prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
// #JavasriptMastery: Tutorial Of this Project: https://www.youtube.com/watch?v=wm5gMKuwSYk
