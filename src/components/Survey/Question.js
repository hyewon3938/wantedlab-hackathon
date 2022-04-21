import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { data } from "../../common/constant/data";

import zzal from "../../image/jobMbti/zzal.jpeg";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Question = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(1);

  const answerClickHandler = () => {
    if (currentIndex + 1 === data.questions.length)
      return history.push("/result");
    setCurrentIndex((prev) => prev + 1);
  };

  console.log(currentIndex);
  console.log(data.questions.length);

  return (
    <MobileViewWrap>
      <Wrap>
        <ProgressWrap>
          <span>
            {currentIndex} / {data.questions.length}
          </span>
          <ProgressBarWrap>
            <ProgressBar rate={(currentIndex / data.questions.length) * 100} />
          </ProgressBarWrap>
        </ProgressWrap>
        <QuestionImage>
          <img src={data.questions[currentIndex].image} />
        </QuestionImage>
        <QuestionWrap>{data.questions[currentIndex].content}</QuestionWrap>
        <AnswerWrap>
          {data.questions[currentIndex].selectList.map((item, index) => (
            <Answer index={`anser-key-${index}`} onClick={answerClickHandler}>
              {item.content}
            </Answer>
          ))}
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
  width: ${({ rate }) => rate + "%"};
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
  line-height: 20px;
  white-space: pre-line;
  cursor: pointer;
`;
