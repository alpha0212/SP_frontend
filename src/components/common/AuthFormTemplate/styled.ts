import styled from "@emotion/styled";

export const AuthFormTemplateContainer = styled.div`
  width: 43rem;
  border-radius: 1.2rem;
  @media screen and (max-width: 52rem) {
    width: 35rem;
  }
`;

export const AuthFormTypeContainer = styled.div<{
  formType: "login" | "register";
}>`
  display: flex;
  background-color: #ffffff;

  & > a {
    margin: 0rem 1rem 0rem 1rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    border: 1rem;
    flex: 1 1 auto;
    color: #afafaf;
    font-size: 2.4rem;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    padding: 1.7rem;
    background-color: #ffffff;
    border-bottom: solid 0.6rem #afafaf;
    transition: all 200ms;
    @media screen and (max-width: 40rem) {
      font-size: 2.2rem;
    }
  }
  & > a.active {
    border-bottom: solid 0.6rem #6b94f8;
    color: #6b94f8;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
  }
`;

export const AuthForm = styled.form`
  padding: 2rem;
  & > div:not(:last-child) {
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-left: -1.2rem;
  @media screen and (max-width: 40rem) {
    height: 3rem;
    margin-left: -1.2rem;
    margin-top: 2rem;
  }
`;
