import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;
  padding-top: 2.5rem;
  color: white;
  background: #f2f2f2;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  border-bottom: 0.1rem solid #c6c6c6;
`;

export const NavbarLogo = styled.img`
  width: 32.6rem;
  object-fit: contain;
`;

export const NavbarText = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 10vw;
`;

export const NavbarFormGroup = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2rem;
  padding-left: 80vw;
  @media screen and (max-width: 76rem) {
    padding-left: 70vw;
  }
  @media screen and (max-width: 57rem) {
    padding-left: 68vw;
  }
  @media screen and (max-width: 40rem) {
    padding-left: 60vw;
  }
  @media screen and (max-width: 32rem) {
    padding-left: 58vw;
  }
`;

export const NavbarMyPlanContainer = styled.div`
  padding-right: 48vw;
`;

export const NavbarMyPlan = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NavbarLogout = styled(Link)`
  padding-left: 23vw;
  text-decoration: none;
  color: black;
`;

export const NavbarA = styled(Link)`
  font-size: 1.5rem;
  margin-left: 2vw;
  margin-right: 2vw;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 76rem) {
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;

export const NavbarAContainer = styled.div``;

export const loggedInContainer = styled.div``;
