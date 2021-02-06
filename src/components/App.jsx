import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <div className="ui container">
        {/* (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        ) */}
        <Translate />
      </div>
    </div>
  );
};

export default App;
