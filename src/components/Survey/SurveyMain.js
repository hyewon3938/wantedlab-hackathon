import React, { useEffect, useState } from "react";
import styled from "styled-components";

//image
import wantedLogo from "../../image/logo/wanted-logo.jpeg";
import jobMBTImain from "../../image/jobMbti/jobMBTImain.png";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const SurveyMain = () => {
  const [userLogo, setUserLogo] = useState();
  const [titleText, setTitleText] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    setUserLogo(wantedLogo);
    setTitleText("직장인 댕댕이 테스트");
    setMainImage(jobMBTImain);
  }, []);

  const startClickHandler = () => {
    window.location.pathname = "/test-survey-generator/question";
  };

  return (
    <MobileViewWrap background={"#e3eeff"}>
      <Wrap>
        <Logo>
          <img src={userLogo} />
        </Logo>
        <TitleWrap>
          <Title>{titleText}</Title>
          <TitleUnderLine />
        </TitleWrap>
        <MainImage>
          <img src={mainImage} />
        </MainImage>
        <TestStartButton onClick={startClickHandler}>
          테스트 시작하기
        </TestStartButton>
      </Wrap>
    </MobileViewWrap>
  );
};

export default SurveyMain;

const Wrap = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  height: 60px;
  border-radius: 50%;
  margin: 0 0 20px 0;
  overflow: hidden;
  img {
    height: 100%;
  }
`;

const TitleWrap = styled.div``;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: ONE-Mobile-Title;
  padding: 5px 10px;
`;

const TitleUnderLine = styled.div`
  width: 100%;
  height: 5px;
  margin: 0 0 40px 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.wantedLightBlue};
`;

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  height: center;
  width: 260px;
  height: 260px;
  /* border-radius: 0 0 50% 50%; */
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  padding: 30px 0 0 0;
  img {
    width: 90%;
  }
`;

const TestStartButton = styled.button`
  margin: 40px 0 0 0;
  padding: 15px 20px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.wantedBlue};
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;
