import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800&display=swap');

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      outline: none;

      &::before,
      &::after {
        box-sizing: border-box;
      }
    }
    
    html, body, #root {
      height: 100%;
      width:100%;
   
      font-family: 'Nunito', sans-serif;
      display: flex;
 
  justify-content: space-between;


    }
    
    
  `;

export default GlobalStyle;
