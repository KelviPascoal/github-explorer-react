import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Header = styled.header`

display:flex;
align-items: center;
justify-content: space-between;

p{
    font-size: 18px;
    color: #f54b64;
}
a{
    font-size: 14px;
    color: #f54b64;
    text-decoration: none;
}
    `;

export const RepositoryInfo = styled.div`
    display:flex;
    flex-direction: column;
    align-items: initial;


    header{
    display:flex;
    align-items: center;
        img{
            width:64px;
            height:64px;
            border-radius:50%;
            margin: 16px;
            }
            div{
                strong{
                    color: white;

                }
                p{
                    color: white;
                }
            }
    }
    ul {
        max-width: 500px;   

        display:flex;
        justify-content: space-around;

        li{
            margin-left: 32px;

            display: flex;
            flex-direction: column;
            align-items: center;

            strong{
                color: white;
                font-size: 32px;
            }
            span{
                color: white;
                }
            }
        }
    }
`;

export const Issues = styled.a`
        
        a{
            margin-top: 80px;
            background-color: #1d3752;
            border-radius: 5px;
            width: 100%;
            padding: 24px;
            display: block;
            text-decoration: none;
            display: flex;
            align-items: center;
            transition: transform 0.2s;

            & + a {
                margin-top: 16px;
            }

            &:hover{
              transform: translateX(10px);
            }

        
            div{
                margin-left: 16px;
                flex: 1;

                strong{
                    font-size: 20px;
                    color: #1E90FF;
                }
                p{
                    font-size: 18px;
                    color: #a8a8b3;
                }
            }
       
            svg {
                margin-left: auto;
                color:  #cbcbd6;
            }
        }

        

`;