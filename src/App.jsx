import React from "react";
import Heading from "./Heading";

function App() {
  const customStyle = {
    color: ""
  };
  if (Heading() == "Good Morning") {
    customStyle.color = "red";
  } else if (Heading() == "Good Afternoon") {
    customStyle.color = "green";
  } else {
    customStyle.color = "blue";
  }
  return (
    <h1 style={customStyle}>
      <Heading />
    </h1>
  );
}

export default App;
