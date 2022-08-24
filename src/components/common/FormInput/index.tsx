import React from "react";

import * as S from "./styled";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ placeholder, type, name }, ref) => (
    <S.FormInputContainer ref={ref}>
      <S.InputElementContainer>
        <S.InputContainer>
          <S.InputElement placeholder={placeholder} type={type} name={name} />
        </S.InputContainer>
      </S.InputElementContainer>
    </S.FormInputContainer>
  )
);
