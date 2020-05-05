import React, { useState } from "react";

const Button = () => {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("Button cliked");
  };
  return <button onClick={handleClick}>{text || props.text}</button>;
};

export default Button;
