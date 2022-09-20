import styled from "@emotion/styled";
import { Field } from "formik";

export const FormInputContainer = styled.div`
  width: 40rem;
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
  margin-bottom: 1rem;
`;
export const InputElement = styled(Field)`
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
    width: 32.8rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`;

export const InputElementContainer = styled.div`
  background-color: #fcfcfc;
  margin-bottom: 5.4rem;
`;
export const InputContainer = styled.div``;
