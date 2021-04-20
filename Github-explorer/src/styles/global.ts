import { createGlobalStyle } from 'styled-components';
import bgcGit from '../assets/bgcGit.jpg'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #05000c;
        

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #root {
        max-width: 960;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;