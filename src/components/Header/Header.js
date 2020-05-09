import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  background: #2980b9;
  color: #fff;
  display: flex;
  padding: 20px;
`;

const Header = () => {
  return <HeaderBar>Testes frontend</HeaderBar>;
};

export default Header;
