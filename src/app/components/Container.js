"use client";

import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ConstContainer = ({children}) => {
  return <Container>{children}</Container>;
}

export default ConstContainer;
