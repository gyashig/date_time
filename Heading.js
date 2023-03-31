import React from "react";
import ReactDOM from "react-dom";
function time() {
  const date = new Date(2022, 1, 1, 19);
  const hr = date.getHours();

  let greeting;
  const customtheme = {
    color: ""
  };

  if (hr <= 12) {
    greeting = "good morning";
    customtheme.color = "blue";
  } else if (hr > 12 && hr <= 18) {
    greeting = "good evening";
    customtheme.color = "red";
  } else {
    greeting = "good night";
    customtheme.color = "green";
  }

  return <h1 style={customtheme}>{greeting}</h1>;
}

export default time;
