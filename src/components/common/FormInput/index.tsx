import React from "react";

import * as S from "./styled";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, placeholder, type, name }, ref) => (
    <S.FormInputContainer ref={ref}>
      <S.Label>{label}</S.Label>
      <S.InputElementContainer>
        <S.InputContainer>
          <S.InputElement placeholder={placeholder} type={type} name={name} />
        </S.InputContainer>
      </S.InputElementContainer>
    </S.FormInputContainer>
  )
);
