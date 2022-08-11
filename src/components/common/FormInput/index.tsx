import React from "react";

import * as S from "./styled";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, placeholder, type, name, onChange, value }, ref) => (
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
  )
);
