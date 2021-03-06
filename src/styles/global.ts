import { createGlobalStyle } from 'styled-components';
import githubImage from '../assets/githubImage.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5 url(${githubImage}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
        
        display: flex;
        justify-content: center;
    }

    #root {
        max-width: 960;
        margin: 0 auto;
        padding: 40px 20px;
    }

    body, input, button {
        font: 16px Roboto, sans-serief;
    }

    button {
        cursor: pointer;
    }
`;