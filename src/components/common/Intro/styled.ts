import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Background = styled.div`
  width: 100%;
  padding-top: 15rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 60rem) {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  margin: 2rem 0 0 0;
`;

export const AuthContainer = styled.div`
  display: flex;
  margin: 0 0 1.5rem 0;
`;

export const Flex = styled.div`
  display: flex;
  margin: auto;
`;

export const SectionOne = styled.div`
  margin: auto;
  width: 27rem;
  height: 15rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0px 30px 0px rgb(0 0 0 / 8%);
  background-color: #fcfcfc;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (min-width: 50rem) {
    width: 40rem;
    height: 13rem;
  }
`;

export const SectionTwo = styled.div`
  margin: auto;
  width: 27rem;
  height: 15rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0px 30px 0px rgb(0 0 0 / 8%);
  background-color: #fcfcfc;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (min-width: 50rem) {
    width: 40rem;
    height: 13rem;
  }
`;

export const auth = styled.div`
  width: 19rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0 30px 0 rgba(0 0 0 / 8%);
  background-color: #fcfcfc;
  margin: 0 1rem 0 1rem;
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (max-width: 40rem) {
    width: 13rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 3rem 0.5rem 0 0.5rem;
  }
`;

export const Logout = styled.button`
  width: 19rem;
  border-radius: 1.2rem;
  border: 1px solid #fdfdfd;
  box-shadow: 1px 0 30px 0 rgba(0 0 0 / 8%);
  background-color: #fcfcfc;
  margin: 0 1rem 0 1rem;
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  &:hover {
    border: 1px solid #2cd3e6;
  }
  @media screen and (max-width: 40rem) {
    width: 13rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin: 3rem 0.5rem 0 0.5rem;
  }
`;

export const AuthTitle = styled.div`
  font-size: 2rem;
  font-weight: 650;
  color: black;
`;

export const AuthTitleLink = styled(Link)`
  font-size: 2rem;
  font-weight: 650;
  text-decoration: none;
  color: black;
`;

export const TitleContainer = styled.div`
  float: left;
  margin: 3rem 0 0 3rem;
  @media screen and (min-width: 50rem) {
    margin: 2rem 0 0 2rem;
  }
`;

export const SectionTitle = styled(Link)`
  font-size: 2.5rem;
  font-weight: 700;
  text-decoration: none;
  color: black;
`;

export const explainContainer = styled.div`
  padding-top: 1rem;
  line-height: 2.2rem;
`;

export const explainBox = styled.div`
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 1.4rem;
`;
