import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FormInputContainer = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
  margin-left: -1.2rem;
  @media screen and (max-width: 40rem) {
    width: 33.4rem;
  }
`;

export const Label = styled.p`
  font-size: 1.7rem;
  color: #363636;
  margin-bottom: 0.5rem;
`;
export const InputElement = styled.input`
  border: none;
  outline: none;
  width: 41rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: 0.2rem solid #c6c6c6;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0.1rem 0.4rem 0.3rem 0 rgba(213, 223, 247, 0.15);
  ::placeholder {
    color: #afafaf;
  }
  @media screen and (max-width: 40rem) {
    width: 26rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`;

export const InputElementContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 1.2rem;
`;
export const InputContainer = styled.div``;

export const ChooseMenu = styled.div`
  width: 41rem;
  color: #858585;
  text-align: center;
  display: flex;
`;

export const Choose = styled(Link)`
  text-decoration: none;
  color: #858585;
  margin-right: 5rem;
  margin-left: 5rem;
  display: flex;
  letter-spacing: 0.12rem;
`;

export const goTeacher = styled.div`
  color: black;
  font-weight: 500;
`;
