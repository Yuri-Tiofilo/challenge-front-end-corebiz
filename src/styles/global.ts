import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    background:#ffff;
    color:#000 ;
    -webkit-font-smoothing:antialiased;
  }
  body,input,button{
    font-family: 'Nunito', sans-serif;
    font-size:16px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }
  button{
    cursor: pointer;
  }
  :root {
    --primary: #000;
    --secondary: #fff;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --card: #E6E8EA;
    --form: #F2F2F2;

    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #F8475F;

    --textMyAccount: #7A7A7A;
  }

`;
