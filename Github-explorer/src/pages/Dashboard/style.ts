import styled, { css } from 'styled-components';
import { shade } from 'polished'

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #f54b64;
`;

export const Form = styled.form<FormProps>`
        margin-top: 40px;
        max-width: 700px;

        display: flex;
        align-items: center;

        input{
            flex: 1;
            height: 70px;
            padding: 0 24px;
            border: 0;
            border-radius: 5px 0 0 5px;
            color: #f1f1f1;
            background-color: #214d72;
            border: 2px solid #214d72;
            border-right: 0;

            ${(props) => props.hasError && css`
                border: 2px solid #c53030;
            `}

            &::placeholder{
                color: #a8a8d3;
            }
        }
        button{
            width:210px;
            height: 70px;
            background-color: #04d361;
            color: white;
            border: 0;
            transition: background-color 0.2s;

            &:hover{
                background: ${shade(0.2, '#04d361')};
            }
        }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`

export const Repositories = styled.a`
        
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

            img{
                width:64px;
                height:64px;
                border-radius:50%;
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
