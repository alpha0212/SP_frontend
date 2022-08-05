import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  justify-content: right;
  align-items: right;
  border-bottom: 0.1rem solid black;
  font-family: Pretendard;
`;

export const NavbarLogo = styled.img`
  width: 32.6rem;
  object-fit: contain;
`;

export const NavbarText = styled.div`
  padding-bottom: 2rem;
  padding-right: 9vw;
`;

export const NavbarA = styled(Link)`
  font-size: 1.5rem;
  margin-left: 2vw;
  margin-right: 2vw;
  text-decoration: none;
  color: black;
`;
