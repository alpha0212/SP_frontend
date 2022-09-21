import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ListOfMenu = styled.div`
  padding-top: 2.25rem;
  box-shadow: 0rem 0.3rem 0.6rem 0rem #c7c7c729;
  display: flex;
`;

export const ListContainer = styled.div`
  text-align: center;
  display: flex;
  margin: auto;
  padding-right: 1rem;
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
