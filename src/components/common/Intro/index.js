import React from "react";
import logo from "src/assets/book3.jpg";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";
import * as S from "./styled";

export const Intro = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("Flash", 1, 0.1),
    2: useScrollFadeIn("Flash", 1, 0.2),
    3: useScrollFadeIn("Flash", 1, 0.3),
    4: useScrollFadeIn("Flash", 1, 0.4),
    5: useScrollFadeIn("Flash", 1, 0.5),
  };

  return (
    <S.Background>
      <S.MainContainer>
        <S.MainFontContainer>
          <S.MainFont>SkyPlanner</S.MainFont>
          <S.LineLogo src={logo} />
          <S.description {...animatedItem[0]}>
            <S.text1>스카이 플래너는 SKY대학생들에게</S.text1>
            <S.text1>공부하는 방법과 공부계획수립 방법을 전수받고</S.text1>
            <S.text1>
              학생이 스스로 공부하며 자신에게 맞는 공부법을 찾아줍니다.
            </S.text1>
            <S.text1>자기주도학습 맞춤 서비스 - skyplanner</S.text1>
          </S.description>
          <S.Box>
            <S.leftBox {...animatedItem[1]}>
              <S.leftBoxContainer>
                <S.leftBoxTitle>SKY대학생 선생님</S.leftBoxTitle>
                <S.leftBoxText>
                  각 선생님들의 대학교 갈 수 있었던 팁들을 전수받고
                  <br /> 공부하는 방법과 일상생활에 공부 습관을 잡아줍니다.
                </S.leftBoxText>
              </S.leftBoxContainer>
            </S.leftBox>
            <S.rightPosition>
              <S.rightBox {...animatedItem[2]}>
                <S.rightBoxContainer>
                  <S.rightBoxTitle>공부법 코칭</S.rightBoxTitle>
                  <S.rightBoxText>
                    학생 스스로에게 맞는 학생 맞춤형 공부코칭 서비스.
                    <br />
                    일방적으로 공부를 알려주는 것이 아닌
                    <br />
                    학생이 질문하고 선생님이 대답해줍니다.
                  </S.rightBoxText>
                </S.rightBoxContainer>
              </S.rightBox>
            </S.rightPosition>
            <S.leftBox {...animatedItem[3]}>
              <S.leftBoxContainer>
                <S.leftBoxTitle>학생 중심</S.leftBoxTitle>
                <S.leftBoxText>
                  항상 모든 공부에는 자기 중심적인 학습이 중요합니다.
                  <br />
                  이를 자기주도 학습이라고 합니다. 학생 스스로가 <br />
                  공부를 하며 습득하여 계획수립을 <br />
                  혼자서 할 수 있게됩니다.
                </S.leftBoxText>
              </S.leftBoxContainer>
            </S.leftBox>
            <S.rightPosition>
              <S.rightBox {...animatedItem[4]}>
                <S.rightBoxContainer>
                  <S.rightBoxTitle>자신에게 맞는 선생님</S.rightBoxTitle>
                  <S.rightBoxText>
                    자신이 전공하고 있는 분야의 선생님 또는자신과
                    <br />
                    성향이 맞는 선생님을 택하여 공감대를 형성해,
                    <br />
                    공부에 흥미와 좀 더 빠른 지식전달을 합니다.
                    <br />
                  </S.rightBoxText>
                </S.rightBoxContainer>
              </S.rightBox>
            </S.rightPosition>
            <S.leftBox {...animatedItem[5]}>
              <S.leftBoxContainer>
                <S.leftBoxTitle>성적 by 반복</S.leftBoxTitle>
                <S.leftBoxText>
                  습득한 공부방법과 계획수립 방법을 반복하면
                  <br />
                  자신만의 공부법과 생활패턴으로 더 나은 성적을
                  <br />
                  노려볼 수 있습니다.
                  <br />
                </S.leftBoxText>
              </S.leftBoxContainer>
            </S.leftBox>
          </S.Box>
        </S.MainFontContainer>
      </S.MainContainer>
    </S.Background>
  );
};
