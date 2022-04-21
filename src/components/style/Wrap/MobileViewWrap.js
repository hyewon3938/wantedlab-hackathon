import React from "react";
import styled from "styled-components";

const MobileViewWrap = ({ children, background = "#fff" }) => {
  return (
    <Wrap background={background}>
      <MobileView background={background}> {children}</MobileView>
    </Wrap>
  );
};

export default MobileViewWrap;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.background};
  font-family: Pretendard-Regular;
`;

const MobileView = styled.div`
  width: 360px;
  height: 100%;
  /* border: solid 1px rgba(0, 0, 0, 0.1); */
  overflow-y: scroll;
  overflow-x: hidden;
  ${(props) => props.background}
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
