import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import zzal from "../../image/jobMbti/zzal.jpeg";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Question = () => {
  const history = useHistory();
  const resultClickHandler = () => {
    // window.location.pathname = "/result";
    history.push("/result");
  };
  return (
    <MobileViewWrap>
      <Wrap>
        <ProgressWrap>
          <span>5/12</span>
          <ProgressBarWrap>
            <ProgressBar />
          </ProgressBarWrap>
        </ProgressWrap>
        <QuestionImage>
          <img src={zzal} />
        </QuestionImage>
        <QuestionWrap>
          아침에 출근하니 옆 자리 팀원이 피곤해보인다. 왜 이렇게 피곤하냐고
          물으니 “늦게 잤어, 어제 생각할 게 너무 많아서.. ”라고 대답한 팀원.
          이럴 때 나는?
        </QuestionWrap>
        <AnswerWrap>
          <Answer onClick={resultClickHandler}>무슨 생각했는데 ?</Answer>
          <Answer>요새 고민 있어 ?</Answer>
        </AnswerWrap>
      </Wrap>
    </MobileViewWrap>
  );
};

export default Question;

const Wrap = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard-Regular;
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  span {
    font-size: 12px;
    margin: 0 0 10px 0;
    color: gray;
  }
`;

const ProgressBarWrap = styled.div`
  position: relative;
  width: 70%;
  height: 18px;
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.color.wantedLightBlue};
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 30%;
  height: 100%;
  background: ${({ theme }) => theme.color.wantedLightBlue};
`;

const QuestionImage = styled.div`
  height: 200px;
  margin: 25px 0;
  img {
    height: 100%;
    border-radius: 10px;
  }
`;

const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  padding: 30px 15px;
  line-height: 25px;
  font-size: 16px;
  word-break: keep-all;
  font-weight: bold;
`;

const AnswerWrap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 12px;
`;

const Answer = styled.li`
  width: 100%;
  padding: 18px 20px;
  background: ${({ theme }) => theme.color.wantedLightBlue};
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
`;
