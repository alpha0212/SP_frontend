import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;
  padding-top: 2rem;
  color: white;
  background-color: #f4f8fd;
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
  padding-top: 0.5rem;
  padding-bottom: 2.5rem;
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
  text-decoration: none;
  color: black;
`;

export const TextSet = styled.div`
  margin-top: 0.9rem;
`;

export const Logout = styled.button`
  border: none;
  font-weight: 700x;
  font-size: 1.7rem;
  margin-top: 0.5rem;
  background-color: #f4f8fd;
`;

export const Logo = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: black;
`;
