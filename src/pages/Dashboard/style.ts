import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const LogoContainer = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #3a3a3a;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #282828;
    background-color: #ffffff;
    font-weight: bold;
    border: 2px solid #ffffff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  
  button {
    width: 210px;
    height: 70px;
    background-color: #04d361;
    color: #fff;
    border: 0;
    transition: background-color 0.2s;
    border-radius: 0 5px 5px 0;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.a`
  
  a {
    max-width: 700px;
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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
