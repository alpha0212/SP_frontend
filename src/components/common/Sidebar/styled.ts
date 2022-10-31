import styled from "@emotion/styled";

export const SideContainer = styled.div<{ testProps: boolean }>`
  width: 3rem;
  padding-top: 100%;
  background-color: ${(props) => (props.testProps ? "black" : "blue")};
`;
