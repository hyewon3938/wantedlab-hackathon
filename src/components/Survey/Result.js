import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import { data, matchMBTIResult } from "../../common/constant/data";

import wantedTextLogo from "../../image/logo/wanted-text-logo.png";
import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Result = () => {
  const history = useHistory();
  const params = useParams();

  const [resultObject, setResultObject] = useState();

  useEffect(() => {
    const urlMatch = Object.keys(matchMBTIResult);
    const resultType = urlMatch.find((item) => {
      return matchMBTIResult[item] === params.id;
    });

    setResultObject(data.results.find((item) => item.type === resultType));
  }, []);

  const openLink = (link) => {
    window.open(link);
  };

  const backToMainButtonHandler = () => {
    history.push("/survey");
  };

  return (
    <MobileViewWrap background={"#e3eeff"}>
      {resultObject && (
        <Wrap>
          <ResultImage>
            <img src={resultObject.image} />
          </ResultImage>
          <ResultTitle>{resultObject.title}</ResultTitle>
          <ResulInfoList>
            {resultObject.resultItems.map((result, index) => (
              <ResultInfo key={index}>- {result}</ResultInfo>
            ))}
          </ResulInfoList>
          <ResultLinkTitle>
            {resultObject.title}
            에게 <br /> 어울리는 직무는?
          </ResultLinkTitle>
          <ResultLinkButtonWrap>
            {resultObject.linkList.map((item, index) => (
              <LinkButton
                key={index}
                index={index}
                onClick={() => openLink(item.link)}
              >
                ???
                {/* {item.content} */}
              </LinkButton>
            ))}
          </ResultLinkButtonWrap>

          <ResultLinkTitle>
            {resultObject.title}
            에게 <br /> 어울리는 직무의 연봉은?
          </ResultLinkTitle>
          <ResultLinkButtonWrap>
            {resultObject.linkList.map((item, index) => (
              <LinkButton
                key={index}
                index={index}
                onClick={() => openLink("https://www.wanted.co.kr/salary/518")}
              >
                직무 {index + 1}의 연봉 정보 확인
                {/* {item.content} */}
              </LinkButton>
            ))}
          </ResultLinkButtonWrap>

          <ResultLinkTitle>
            {resultObject.title}의 성향을 살려 이력서를 채워볼까요?
          </ResultLinkTitle>
          <ResultLinkButtonWrap>
            <LinkButton
              onClick={() => openLink("https://www.wanted.co.kr/cv/list")}
            >
              이력서 작성하기
            </LinkButton>
          </ResultLinkButtonWrap>
          <ShareMessage>결과 내용 공유하기</ShareMessage>
          <ShareButtonWrap>
            <ShareButton>링크 복사</ShareButton>
            <ShareButton>키톡 공유</ShareButton>
          </ShareButtonWrap>

          <GoBackTestButton onClick={backToMainButtonHandler}>
            {"<<-  "} 테스트로 돌아가기
          </GoBackTestButton>
          <WantedLogo>
            <img src={wantedTextLogo} />
          </WantedLogo>
        </Wrap>
      )}
    </MobileViewWrap>
  );
};

export default Result;

const Wrap = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 100px 0;
  font-family: ONE-Mobile-Title;
`;

const ResultImage = styled.div`
  width: 80%;
  img {
    width: 100%;
  }
`;

const ResultTitle = styled.h1`
  font-family: ONE-Mobile-Title;
  font-size: 25px;
  margin: 25px 0 0 0;
  line-height: 30px;
  text-align: center;
  width: 80%;
`;

const ResulInfoList = styled.ul`
  padding: 40px 30px;
  border-radius: 10px;
  background: #fff;
  margin: 30px 10px;
`;

const ResultInfo = styled.li`
  font-size: 18px;
  margin: 10px 0 0 0;
  line-height: 25px;
  font-family: Pretendard-Regular;
`;

const ResultLinkTitle = styled.h1`
  font-family: ONE-Mobile-Title;
  font-size: 18px;
  width: 70%;
  line-height: 25px;
  text-align: center;
  margin: 30px 0 0 0;
  word-break: keep-all;
`;

const ResultLinkButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin: 30px 0 0 0;
`;

const LinkButton = styled.button`
  width: 80%;
  height: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme, index }) => {
    if (index === 0) return theme.color.wantedMint;
    if (index === 1) return theme.color.wantedLightBlue;
    return theme.color.wantedBlue;
  }};
`;

const ShareButtonWrap = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  gap: 15px;
`;

const ShareButton = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: lightgray;
`;

const ShareMessage = styled.p`
  text-align: center;
  margin: 45px 0 0 0;
  font-size: 18px;
`;

const WantedLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0 0 0;
  img {
    height: 15px;
  }
`;

const GoBackTestButton = styled.button`
  margin: 35px 0 0 0;
  font-family: ONE-Mobile-Title;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
