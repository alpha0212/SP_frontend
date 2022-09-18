import styled from "@emotion/styled";

export const FormInputContainer = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  top: 50%;
  transform: translate(0, 50%);
  @media screen and (max-width: 40rem) {
    width: 33.4rem;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  letter-spacing: 0.05rem;
`;

export const Label = styled.div`
  font-size: 1.5rem;
  color: #858585;
  margin-top: 2rem;
`;

export const teacher = styled.div`
  font-size: 1.5rem;
  color: #858585;
  margin-top: 2rem;
  margin-left: 0.3rem;
`;

export const InputElement = styled.input`
  outline: none;
  width: 41rem;
  height: 5rem;
  font-size: 1.6rem;
  border: 0.2rem solid rgba(54, 54, 54, 0.2);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0.1rem 0.4rem 0.3rem 0 rgba(213, 223, 247, 0.15);
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
  border-radius: 2rem;
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const empty = styled.div`
  margin-top: 2rem;
`;

export const TitleContainer = styled.div`
  margin: auto;
  width: 20.4rem;
  text-align: center;
  border-bottom: 0.3rem solid black;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  color: black;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  letter-spacing: 0.05rem;
`;
