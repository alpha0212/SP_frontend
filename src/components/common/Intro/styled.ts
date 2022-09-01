import styled from "@emotion/styled";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10rem;
  text-align: center;
`;
export const MainFont = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: white;
  width: 100vw;
  font-size: 8vw;
`;

export const MainFontContainer = styled.div`
  width: 100vw;
  padding-bottom: 100vw;
  @media screen and (max-width: 30rem) {
    padding-bottom: 120vw;
  }

  @media screen and (max-width: 92rem) {
    padding-bottom: 150vw;
  }

  @media screen and (max-width: 60rem) {
    padding-bottom: 100vw;
  }
  @media screen and (max-width: 150rem) {
    padding-bottom: 110vw;
  }
`;

export const Background = styled.div`
  width: 100%;
  background-color: rgba(98, 129, 224);
  padding-top: 4rem;
`;

export const description = styled.div`
  font-size: 1.2rem;
  font-weight: 0.5rem;
  color: white;
  padding-top: 10rem;
`;

export const text1 = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

//box

export const Box = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

//left
export const leftBoxContainer = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  @media screen and (max-width: 50rem) {
    padding-bottom: 1rem;
  }
`;
export const leftBox = styled.div`
  width: 55%;
  padding-top: 6rem;
  position: relative;
  float: left;
  @media screen and (max-width: 100rem) {
    width: 55%;
  }
  @media screen and (max-width: 50rem) {
    padding-top: 1rem;
  }
  border-radius: 2rem;
  background-color: rgba(176, 192, 239);
`;

export const leftBoxTitle = styled.div`
  font-size: 6vw;
  font-weight: 500;
  text-align: left;
  margin-left: 4vw;
`;

export const leftBoxText = styled.div`
  text-align: left;
  padding-top: 1vh;
  margin-left: 4vw;
  font-size: 2vw;
`;

//right

export const rightPosition = styled.div`
  width: 100%;
`;

export const rightBoxContainer = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  @media screen and (max-width: 50rem) {
    padding-bottom: 1rem;
  }
`;
export const rightBox = styled.div`
  width: 55%;
  padding-top: 6rem;
  position: relative;
  float: right;
  @media screen and (max-width: 100rem) {
    width: 55%;
  }
  @media screen and (max-width: 50rem) {
    padding-top: 1rem;
  }
  border-radius: 2rem;
  background-color: rgba(79, 103, 179);
`;

export const rightBoxTitle = styled.div`
  color: #fff;
  font-size: 6vw;
  font-weight: 500;
  text-align: right;
  margin-right: 4vw;
`;

export const rightBoxText = styled.div`
  color: #fff;
  text-align: right;
  padding-top: 1vh;
  font-size: 2vw;
  margin-right: 4vw;
`;
