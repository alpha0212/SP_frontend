import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  margin-left: 10rem;
  margin-top: 5rem;
  display: flex;
`;

export const List = styled.div`
  width: 10rem;
  height: 5rem;
  border-radius: 1.2rem;
  border: 0.2rem solid rgba(213, 223, 247);
  background-color: #fefefe;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
`;

export const StText = styled.div`
  margin-top: 1.8rem;
`;

export const StName = styled(Link)`
  text-decoration: none;
  color: #323232;
`;
