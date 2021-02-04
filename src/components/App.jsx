import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
  {
    title: "What is React?",
    content: "It is a front-end JS framework",
  },
  {
    title: "Why use React?",
    content: "Favorite among developers",
  },
  {
    title: "How to use React?",
    content: "BY creating components",
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
