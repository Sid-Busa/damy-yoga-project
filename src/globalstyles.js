import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'PT Serif', serif;
        overflow-x: hidden;
        background-color: transparent;
    }
    h1,h2,h3,h4,h5, h6 {
        font-family: 'PT Serif', serif;
        color: #41354e;
    }
    p {
        font-family: 'Rosario', sans-serif;
        color: #41354e;
    }
    span {
        color: #41354e;
    }
    ul {
        li {
            color: #fff;
        }
    }
`