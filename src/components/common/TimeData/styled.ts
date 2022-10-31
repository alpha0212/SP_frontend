import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TimeDataContainer = styled.div`
  font-family: Pretendard;
  width: 100%;
`;

export const TimeTextContainer = styled.div`
  padding-left: 5vw;
  padding-top: 5rem;
`;

export const TimeText = styled.div`
  font-size: 4rem;
  @media screen and (max-width: 700px) {
    font-size: 3rem;
  }
`;
export const TimeDataBoxContainer = styled.div`
  padding-top: 2rem;
`;

export const TimeDataBox = styled.div`
  height: 100rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  background-color: #d9d9d9;
`;

export const TimeDataText = styled.div`
  margin-left: 3rem;
  padding-top: 3rem;
  font-size: 3rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const TitleText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const GraphSize = styled.div`
  @media screen and (min-width: 50rem) {
    width: 40%;
    margin: auto;
  }
`;

export const GraphSize2 = styled.div`
  @media screen and (min-width: 50rem) {
    width: 80%;
    margin: auto;
  }
`;
