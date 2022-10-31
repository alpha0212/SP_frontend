import styled from "@emotion/styled";

export const SideContainer = styled.div<{ testProps: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: 0.4s ease;
  width: 20%;
  height: 100%;
  z-index: 99;
  background-color: ${(props) => (props.testProps ? "black" : "blue")};
  color: white;
  font-size: 3rem;
`;

//https://ji-u.tistory.com/22
