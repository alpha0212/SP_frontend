import React from "react";

import * as S from "./styled";

export interface RegisterFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const RegisterForm = React.forwardRef<
  HTMLInputElement,
  RegisterFormInputProps
>(({ label, placeholder, type, name, value, onChange }, ref) => (
  <S.FormInputContainer ref={ref}>
    <S.Label>{label}</S.Label>
    <S.InputElementContainer>
      <S.InputContainer>
        <S.InputElement
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </S.InputContainer>
    </S.InputElementContainer>
  </S.FormInputContainer>
));
