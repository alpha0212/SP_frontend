import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  background: #2cd3e6;
  display: flex;
  padding-top: 2.2rem;
`;

export const Container = styled.div`
  display: flex;
  margin: auto;
  padding-right: 1.5rem;
`;

export const Header = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 2.2rem;
  letter-spacing: 0.1rem;
`;

export const BackSpaceContainer = styled(Link)`
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: black;
`;

export const BackSpace = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;
