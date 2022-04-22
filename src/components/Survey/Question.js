import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { data, matchMBTIResult } from "../../common/constant/data";

import MobileViewWrap from "../style/Wrap/MobileViewWrap";

const Question = () => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState([]);

  const resultList = data.results.map((item) => item.type);

  const getMode = (array) => {
    // 1. 출연 빈도 구하기
    const counts = array.reduce((pv, cv) => {
      pv[cv] = (pv[cv] || 0) + 1;
      return pv;
    }, {});
    // 2. 최빈값 구하기
    const keys = Object.keys(counts);
    let mode = keys[0];
    keys.forEach((val, idx) => {
      if (counts[val] > counts[mode]) {
        mode = val;
      }
    });
    return mode;
  };

  const answerClickHandler = (type) => {
    resultList.forEach((item) => {
      if (item.includes(type)) selectedType.push(item);
    });
    setSelectedType(selectedType);

    if (currentIndex === data.questions.length - 1) {
      const result = getMode(selectedType);
      return history.push(`/result/${matchMBTIResult[result]}`);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <MobileViewWrap>
      <Wrap>
        <ProgressWrap>
          <span>
            {currentIndex + 1} / {data.questions.length}
          </span>
          <ProgressBarWrap>
            <ProgressBar
              rate={((currentIndex + 1) / data.questions.length) * 100}
            >
              <Progress className="grow-animation" />
            </ProgressBar>
          </ProgressBarWrap>
        </ProgressWrap>
        <QuestionImage>
          <img src={data.questions[currentIndex].image} />
        </QuestionImage>
        <QuestionWrap>{data.questions[currentIndex].content}</QuestionWrap>
        <AnswerWrap>
          {data.questions[currentIndex].selectList.map((item, index) => (
            <Answer
              key={"answer-" + index}
              index={`anser-key-${index}`}
              onClick={() => answerClickHandler(item.type)}
            >
              {item.content}
            </Answer>
          ))}
        </AnswerWrap>
      </Wrap>
    </MobileViewWrap>
  );
};

export default Question;

const grow = keyframes`
  from {
    width : 0;
  }
  to{
    opacity : 100%;
  }
`;

const Wrap = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard-Regular;

  .grow-animation {
    animation: ${grow} 1s ease-in-out;
  }
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
  /* background: ${({ theme }) => theme.color.wantedLightBlue}; */
`;
const Progress = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.wantedLightBlue};
  transition: 3s;
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
