import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  padding: 10% 20px;
`;

const MainWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainWrapper;
