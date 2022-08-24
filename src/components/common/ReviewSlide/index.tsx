import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styled";

export const Review: React.FC = () => {
  const settings = {
    autoplay: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <Slider {...settings}>
      <S.ReviewContent>
        <S.ReviewFontSide>
          <S.ReviewStar>⭐⭐⭐⭐⭐</S.ReviewStar>
          <br />
          🙋‍♀️경기학부모
          <br />
          <S.ReviewFont>
            Im Soory 선생님을 만나면서 시험성적 평균이 올랐습니다.
            그래서어쩌고저쩌고 쌸라쌸라뿡꾸
          </S.ReviewFont>
        </S.ReviewFontSide>
      </S.ReviewContent>
      <S.ReviewContent>
        <S.ReviewFontSide>
          <S.ReviewStar>⭐⭐⭐⭐⭐</S.ReviewStar>
          <br />
          🙋‍♂️경기학부모
          <br />
          <S.ReviewFont>아이가 공부를 하기 싫어했는데 ...</S.ReviewFont>
        </S.ReviewFontSide>
      </S.ReviewContent>
      <S.ReviewContent>
        <S.ReviewFontSide>
          <S.ReviewStar>⭐⭐⭐⭐⭐</S.ReviewStar>
          <br />
          👨‍💼전북고1
          <br />
          <S.ReviewFont>
            플래너하면서 제 공부 계획을 잘 관리할 수 있게 된거같아요.
          </S.ReviewFont>
        </S.ReviewFontSide>
      </S.ReviewContent>
      <S.ReviewContent>
        <S.ReviewFontSide>
          <S.ReviewStar>⭐⭐⭐⭐⭐</S.ReviewStar>
          <br />
          👩‍💼부산고2
          <br />
          <S.ReviewFont>고등학생 수능 볼 학생들에게 필수코스!</S.ReviewFont>
        </S.ReviewFontSide>
      </S.ReviewContent>
    </Slider>
  );
};
