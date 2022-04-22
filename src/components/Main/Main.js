import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Main = () => {
  const history = useHistory();

  const startTest = () => {
    history.push("/survey");
  };

  return (
    <Wrap>
      <TestTitle>직장인 직무 성향 테스트</TestTitle>
      <TestStartButton onClick={startTest}>테스트 시작하기</TestStartButton>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 360px) {
  }
`;

const TestTitle = styled.h1`
  margin: 10px 0 10px 0;
  font-family: ONE-Mobile-Title;
  font-size: 18px;
`;

const TestStartButton = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.wantedBlue};
  color: #fff;
  cursor: pointer;
  margin: 0 0 10px 0;
`;
