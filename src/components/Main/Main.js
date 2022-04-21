import React from "react";
import styled from "styled-components";

const Main = () => {
  const startTest = () => {
    window.location.pathname = "/test-survey-generator/survey";
  };

  return (
    <Wrap>
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

const TestStartButton = styled.button`
  padding: 15px 20px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.wantedBlue};
  color: #fff;
  cursor: pointer;
`;
