import React from "react";
import styled from "styled-components";

import ESTP from "../../image/jobMbti/ESTP.png";
import wantedTextLogo from "../../image/logo/wanted-text-logo.png";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Result = () => {
  const data = {
    resultType: "리트리버",
    title: "온화한 리트리버 !",
    image: ESTP,
    resultList: [
      "힘든 일이 있어도 혼자 끙끙 앓는 타입이에요.",
      "누군가 나를 힘들게 해도 끝까지 참아요.",
      "회사 사람들과 사적으로도 친밀하게 지내요.",
      "다른 사람의 이야기를 들어주는 것을 좋아해요.",
      "공감능력이 너무 높아서 가끔 본인이 힘들어질 때가 있어요.",
      "옳은 일을 하고 싶어해요.",
      "사람들 간의 갈등과 긴장이 없는 환경에서 할 수 있는 일이 좋아요.",
    ],
    resultLinkList: [
      {
        text: "???",
        link: "https://www.wanted.co.kr/wdlist/509?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
      },
      {
        text: "???",
        link: "https://www.wanted.co.kr/wdlist/507?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
      },
      {
        text: "???",
        link: "https://www.wanted.co.kr/wdlist/518/671?country=kr&job_sort=company.response_rate_order&years=-1&locations=all",
      },
    ],
  };

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <MobileViewWrap background={"#e3eeff"}>
      <Wrap>
        <ResultImage>
          <img src={data.image} />
        </ResultImage>
        <ResultTitle>{data.title}</ResultTitle>
        <ResulInfoList>
          {data.resultList.map((result) => (
            <ResultInfo>- {result}</ResultInfo>
          ))}
        </ResulInfoList>
        <ResultLinkTitle>{data.resultType}과 어울리는 직무는?</ResultLinkTitle>
        <ResultLinkButtonWrap>
          {data.resultLinkList.map((item, index) => (
            <LinkButton index={index} onClick={() => openLink(item.link)}>
              {item.text}
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
