import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #2ecc71;
  border-radius: 4px;
  font-size: 20px;
  color: #fff;
  padding: 8px 12px;
  outline: none;
`;

const Button = (props) => {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("Button cliked");
  };
  return (
    <StyledButton onClick={handleClick}>{text || props.text}</StyledButton>
  );
};

export default Button;
