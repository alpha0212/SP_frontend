import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MyTimeContainer = styled.div`
  display: flex;
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
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    padding-left: 3rem;
  }
  padding-top: 8rem;
  padding-left: 9vw;
`;

export const MyTimeData = styled.div`
  width: 17rem;
  height: 7rem;
  border-bottom: 0.2rem solid #000000;
  background-color: #d9d9d9;
  @media screen and (max-width: 700px) {
    width: 30rem;
  }
  @media screen and (max-width: 300px) {
    width: 20rem;
  }
`;

export const MyPlanText = styled.div`
  width: 17rem;
  font-size: 2.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.2rem solid #000000;
`;

export const SelectMy = styled.div`
  height: 18rem;
  width: 17rem;
`;

export const SelectMyList = styled.div`
  width: 17rem;
  margin: 1rem 0rem 1rem 0rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: #c6c6c6;
`;

export const SelectMyListText = styled(Link)`
  padding-left: 1rem;
  text-decoration: none;
  color: black;
`;

export const TodayStudyContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
  padding-left: 10rem;
`;

export const TodayStudy = styled.div`
  width: 64%;
`;

export const TodayStudyTextBig = styled.div`
  font-size: 3rem;
  padding-bottom: 3rem;
  color: black;
`;

export const TodayStudyTextsm = styled.div`
  font-size: 1.2rem;
  color: black;
`;

//
export const TodayGraph = styled.div`
  width: 64%;
  border-left: 0.2rem solid black;
  border-bottom: 0.2rem solid black;
`;
//
