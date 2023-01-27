import React from "react";

function Button(props) {
  return (
    <a
      href={props.link}
      className="bg-green-400 rounded-lg p-1 md:p-2 text-white font-medium lg:text-2xl"
    >
      {props.text}
    </a>
  );
}

export default Button;
