import React from "react";

function Button(props) {
  return (
    <a
      href={props.path}
      className="bg-green-400 rounded-lg p-1 md:p-2 text-white font-medium
      lg:text-2xl mr-2"
    >
      {props.text}
    </a>
  );
}

export default Button;
