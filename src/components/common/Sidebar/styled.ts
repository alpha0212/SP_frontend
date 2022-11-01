import styled from "@emotion/styled";

export const SideContainer = styled.div<{ testProps: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => (props.testProps ? "18%" : "9%")};
  height: 100%;
  z-index: 99;
  background-color: ${(props) => (props.testProps ? "black" : "blue")};
  color: white;
  transition: 0.4s ease;
  font-size: 3rem;
`;
