import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

export const List = styled.div`
  width: 17rem;
  height: 5rem;
  border-radius: 1.2rem;
  border: 0.2rem solid rgba(213, 223, 247);
  background-color: #fefefe;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const StText = styled.div`
  margin: auto;
  margin-top: 3rem;
`;

export const StName = styled(Link)`
  text-decoration: none;
  color: #323232;
  font-size: 1.7rem;
`;

export const SearchInput = styled.input`
  width: 25rem;
  height: 5rem;
  border: 0.2rem solid rgba(54, 54, 54, 0.4);
  font-size: 2rem;
  font-weight: bold;
  border-radius: 1.2rem;
  &:hover {
    border: 0.2rem solid rgba(54, 54, 54, 0.8);
  }
  &:focus {
    border: 0.2rem solid rgba(54, 54, 54, 1);
  }
  text-align: center;
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-top: 7vh;
  margin-bottom: 3vh;
  text-align: center;
`;

export const Search = styled.div`
  display: inline-block;
`;
