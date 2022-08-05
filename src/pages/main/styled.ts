import styled from '@emotion/styled';

export const MainPageContainer = styled.div`
  font-family: Pretendard;
  width: 100%;
  padding-top: 30rem;
  @media screen and (max-width: 700px) {
    padding-top: 20rem;
  }
  font-size: 4vw;
`;
export const Line = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: black;
  font-size: 1.4rem;
  margin: 0.8rem 0rem;
  ::before {
    content: '';
    flex-grow: 1;
    margin: 0rem 1rem 0rem 0rem;
    background: rgba(102, 102, 102, 0.35);
    height: 0.1rem;
    font-size: 0rem;
    line-height: 0rem;
  }
  ::after {
    content: '';
    flex-grow: 1;
    margin: 0rem 0rem 0rem 1rem;
    background: rgba(102, 102, 102, 0.35);
    height: 0.1rem;
    font-size: 0rem;
    line-height: 0rem;
  }
`;
