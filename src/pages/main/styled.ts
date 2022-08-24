import styled from "@emotion/styled";

export const Line = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: black;
  font-size: 1.4rem;
  margin: 0.8rem 0rem;
  ::before {
    content: "";
    flex-grow: 1;
    margin: 0rem 1rem 0rem 0rem;
    background: rgba(102, 102, 102, 0.35);
    height: 0.1rem;
    font-size: 0rem;
    line-height: 0rem;
  }
  ::after {
    content: "";
    flex-grow: 1;
    margin: 0rem 0rem 0rem 1rem;
    background: rgba(102, 102, 102, 0.35);
    height: 0.1rem;
    font-size: 0rem;
    line-height: 0rem;
  }
`;
