import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
  padding-top: 15rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 60rem) {
    display: flex;
    flex-direction: column;
  }
`;

export const Flex = styled.div`
  margin: auto;
`;

export const SectionContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 5rem 0rem 1rem 20rem;
  @media screen and (max-width: 1200px) {
    padding: 5rem 0 1rem 0;
  }
`;

export const SectionContainer2 = styled.div`
  display: flex;
  margin: auto;
  padding: 5rem 20rem 1rem 0;
  @media screen and (max-width: 1200px) {
    padding: 5rem 0 1rem 0;
  }
`;

export const TimeInfo = styled.button`
  margin: auto;
  width: 35rem;
  height: 15rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0px 30px 0px rgb(0 0 0 / 8%);
  background-color: #fcfcfc;
  font-size: 2rem;
  font-weight: 600;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (max-width: 50rem) {
    width: 27rem;
    height: 13rem;
  }
`;

export const Profile = styled.button`
  margin: auto;
  width: 35rem;
  height: 15rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0px 30px 0px rgb(0 0 0 / 8%);
  background-color: #fcfcfc;
  font-size: 2rem;
  font-weight: 600;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (max-width: 50rem) {
    width: 27rem;
    height: 13rem;
  }
`;
