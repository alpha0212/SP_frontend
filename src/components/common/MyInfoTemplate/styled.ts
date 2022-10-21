import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  padding-bottom: 22.5rem;
`;

export const ListOfMenu = styled.div`
  padding-top: 1.25rem;
  box-shadow: 0rem 0.3rem 0.6rem 0rem #c7c7c729;
  display: flex;
`;
//
export const MyPlanContainer = styled.div<{
  infoType: "myplan";
}>`
  margin-right: 12rem;
  padding-bottom: 1.5rem;
  @media screen and (max-width: 40rem) {
    margin: 0 4rem 0 0;
  }
  & > a.active {
    border-bottom: 0.2rem solid #2cd3e6;
    padding: 0 2rem 1.1rem 2rem;
  }
`;

export const ProfileContainer = styled.div<{
  infoType: "profile";
}>`
  padding-bottom: 1.5rem;
  margin-left: 12rem;
  @media screen and (max-width: 40rem) {
    margin: 0 0 0 5rem;
  }
  & > a.active {
    border-bottom: 0.2rem solid #2cd3e6;
    padding: 0 2rem 1.1rem 2rem;
  }
`;
//
export const TodayStudy = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const HabitSet = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const MyGoal = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const ListTypeContainer = styled.div`
  @media screen and (max-width: 40rem) {
    padding-right: 3rem;
  }
  text-align: center;
  display: flex;
  margin: auto;
`;
