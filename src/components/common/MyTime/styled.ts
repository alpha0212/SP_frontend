import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MyTimeContainer = styled.div`
  font-family: Pretendard;
  width: 100%;
  padding-left: 10rem;
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
export const VerticalContainer = styled.div`
  padding-top: 5rem;
`;

export const Vertical = styled.div`
  border-left: 0.2rem solid #d9d9d9d9;
  height: 10rem;
`;
export const Horizontal = styled.div`
  border-bottom: 0.2rem solid rgba(217, 217, 217);
`;

export const HorizontalContainer = styled.div`
  padding-top: 4vh;
  padding-left: 9vw;
  padding-right: 10vw;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const TimeGraphContainer = styled.div`
  padding-top: 2rem;
`;

export const TimeInputContainer = styled.div`
  display: flex;
`;

export const ListOfMenu = styled.div`
  padding-top: 2.25rem;
  box-shadow: 0rem 0.3rem 0.6rem 0rem #c7c7c729;
  display: flex;
`;

export const ListContainer = styled.div`
  text-align: center;
  display: flex;
  margin: auto;
`;

export const ListTextContainer = styled.div`
  padding-bottom: 2rem;
`;

export const TodayStudyContainer = styled.div`
  margin-right: 2rem;
`;

export const HabitSetContainer = styled.div`
  padding-bottom: 2.5rem;
`;
export const MyGoalContainer = styled.div`
  margin-left: 2rem;
`;

export const TodayStudy = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const HabitSet = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MyGoal = styled(Link)`
  text-decoration: none;
  color: black;
`;
