import styled from "@emotion/styled";

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
  margin-bottom: 0.5rem;
`;
export const InputElement = styled.input`
  border: none;
  outline: none;
  width: 33rem;
  height: 5rem;
  font-size: 1.6rem;
  ::placeholder {
    color: #afafaf;
  }
  &:hover {
    border-color: #b7dcb9;
  }
  &:focus {
    border-color: #4cb050;
  }
  @media screen and (max-width: 40rem) {
    width: 28rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`;

export const InputElementContainer = styled.div`
  background-color: #ffffff;
  border-radius: 2rem;
  border: 0.1rem solid #c6c6c6;
  box-shadow: 1px 3px 4px rgba(213, 223, 247, 0.15);
  margin-bottom: 5.4rem;
`;
export const InputContainer = styled.div`
  padding-left: 3rem;
`;
