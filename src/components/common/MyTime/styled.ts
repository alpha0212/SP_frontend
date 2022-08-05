import styled from '@emotion/styled';

export const MyTimeContainer = styled.div`
  font-family: Pretendard;
  width: 100%;
`;

export const MyTimeTextContainer = styled.div`
  padding-left: 10vw;
  padding-top: 5rem;
`;

export const MyTimeText = styled.div`
  font-size: 4rem;
  @media screen and (max-width: 700px) {
    font-size: 3rem;
  }
`;

export const Horizontal = styled.div`
  border-bottom: 0.2rem solid rgba(217, 217, 217);
`;

export const HorizontalContainer = styled.div`
  padding-top: 4vh;
  padding-left: 9vw;
  padding-right: 10vw;
`;

export const MyTimeDataContainer = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding-left: 3rem;
  }
  padding-top: 2rem;
  padding-left: 9vw;
`;

export const MyTimeData = styled.div`
  margin: 0rem 1rem 2rem 1rem;
  width: 17rem;
  height: 15rem;
  background-color: #d9d9d9;
  border-radius: 1.5rem;
  @media screen and (max-width: 700px) {
    width: 30rem;
  }
  @media screen and (max-width: 300px) {
    width: 20rem;
  }
`;
