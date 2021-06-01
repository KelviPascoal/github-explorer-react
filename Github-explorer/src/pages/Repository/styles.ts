import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 18px;
    color: #3D3D4D;
  }
  a {
    font-size: 14px;
    color: #A8A8B3;
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
                    color: #3D3D4D;

                }
                p{
                    color: #737380;
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
                color: #3D3D4D;
                font-size: 32px;
            }
            span{
                color: #6C6C80;
                }
            }
        }
    }
`;

export const Issues = styled.a`
  a {
    margin-top: 80px;
    background-color: #fff;
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

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      p {
        font-size: 18px;
        color: #A8A8B3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
