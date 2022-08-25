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
  width: 30rem;
  padding-bottom: 2rem;
  padding-left: 80vw;
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
  width: 10rem;
  text-decoration: none;
  color: black;
`;
