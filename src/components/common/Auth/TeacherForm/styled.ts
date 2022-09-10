import styled from "@emotion/styled";

export const FormInputContainer = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
  margin-left: 28%;
  margin-top: 30%;
  @media screen and (max-width: 40rem) {
    width: 33.4rem;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
`;

export const Label = styled.div`
  font-size: 1.5rem;
  color: #363636;
  margin-top: 2rem;
`;

export const teacher = styled.div`
  font-size: 1.5rem;
  color: #000000;
  margin-top: 2rem;
  margin-left: 0.3rem;
`;

export const InputElement = styled.input`
  outline: none;
  width: 33rem;
  height: 5rem;
  font-size: 1.6rem;
  border: 0.2rem solid rgba(54, 54, 54, 0.2);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  ::placeholder {
    color: #afafaf;
  }
  &:hover {
    border: 0.2rem solid rgba(54, 54, 54, 0.4);
  }
  &:focus {
    border: 0.2rem solid rgba(54, 54, 54, 0.7);
  }
  @media screen and (max-width: 40rem) {
    width: 26rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`;

export const InputElementContainer = styled.div`
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow: 1px 3px 4px rgba(213, 223, 247, 0.15);
  margin-bottom: 1.2rem;
  justify-content: center;
`;

export const InputContainer = styled.div`
  padding-left: 3.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const TeacherButton = styled.button`
  width: 20rem;
  height: 6rem;
  background-color: #313131;
  border-radius: 1.5rem;
  color: #fff;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 18%;
  margin-bottom: 2rem;
`;

export const empty = styled.div`
  margin-top: 2rem;
`;
