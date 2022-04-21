import React from "react";
import styled from "styled-components";

import { data } from "../../common/constant/data";

import ESTP from "../../image/jobMbti/result/ESTP.png";
import wantedTextLogo from "../../image/logo/wanted-text-logo.png";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Result = () => {
  const openLink = (link) => {
    window.open(link);
  };

  const data1 = data.results[2];
  return (
    <MobileViewWrap background={"#e3eeff"}>
      <Wrap>
        <ResultImage>
          <img src={data1.image} />
        </ResultImage>
        <ResultTitle>{data1.title}</ResultTitle>
        <ResulInfoList>
          {data1.resultItems.map((result) => (
            <ResultInfo>- {result}</ResultInfo>
          ))}
        </ResulInfoList>
        <ResultLinkTitle>{data1.title}에게 어울리는 직무는?</ResultLinkTitle>
        <ResultLinkButtonWrap>
          {data1.linkList.map((item, index) => (
            <LinkButton index={index} onClick={() => openLink(item.link)}>
              ???
              {/* {item.content} */}
            </LinkButton>
          ))}
        </ResultLinkButtonWrap>
        <WantedLogo>
          <img src={wantedTextLogo} />
        </WantedLogo>
      </Wrap>
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
  word-break: break-all;
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
  word-break: break-all;
  line-height: 25px;
  text-align: center;
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
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme, index }) => {
    if (index === 0) return theme.color.wantedMint;
    if (index === 1) return theme.color.wantedLightBlue;
    return theme.color.wantedBlue;
  }};
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
