import styled from "@emotion/styled";
import { Field } from "formik";

export const InputTimeContainer = styled.div`
  display: flex;
  margin: auto;
  @media screen and (max-width: 40rem) {
    display: flex;
    margin: auto;
  }
`;

export const SelectOption = styled.select`
  width: 10rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
  border: none;
`;

export const Options = styled.option`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  background-color: #ffffff;
`;

export const InputContainer = styled.div`
  margin-top: 8rem;
  @media screen and (max-width: 40rem) {
    margin-top: 5rem;
  }
`;

export const InputTime = styled(Field)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 13rem;
  border-radius: 1rem;
  border: 0.2rem solid #ccc;
  box-shadow: 0.1rem 0.2rem 0.2rem 0 rgba(204, 204, 204, 0.3);
  &:focus {
    border: 0.2rem solid #5e5e5e;
  }
  text-align: center;
  margin-top: 0.2rem;
  margin-bottom: 2rem;
  font-size: 1.6rem;
`;

export const InputTImeTitle = styled.div`
  padding-top: 2rem;
  padding-left: 0.7rem;
`;

export const InputTimeTitleMin = styled.div`
  padding-top: 2rem;
`;

export const InputFlexContainer = styled.div`
  display: flex;
`;

export const InputFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 2rem;
`;

export const MarginCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
