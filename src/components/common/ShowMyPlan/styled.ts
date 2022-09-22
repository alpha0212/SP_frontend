import styled from "@emotion/styled";

export const profilePageContainer = styled.div``;

export const basicInfo = styled.div``;

export const listOfPosts = styled.div``;

export const Slider = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  padding-top: 2vh;
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const DayContainer = styled.div`
  @media screen and (max-width: 40rem) {
    width: 100%;
  }
  max-height: 12rem;
  display: flex;
  margin: auto;
  overflow-x: auto;
`;

export const DayTime = styled.div`
  min-width: 8rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  &:hover {
    background-color: #d9d9d9;
  }
`;
