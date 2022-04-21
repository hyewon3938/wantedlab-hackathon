import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
    font-size: ${theme.fontSize.base};
    font-family: "Roboto", "Apple SD Gothic Neo", "Helvetica", "Arial", sans-serif;
  }
  button {
    background: none;
    border: 0;
    outline : 0;
  }
  
  input {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
            outline : 0;
}

/* IE10 이상에서 input box 에 추가된 지우기 버튼 제거 */
input::-ms-clear { display: none; }

/* input type number 에서 화살표 제거 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
}


@font-face {
    font-family: 'ONE-Mobile-Title';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-Title.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`;

const GlobalStyleProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default GlobalStyleProvider;
