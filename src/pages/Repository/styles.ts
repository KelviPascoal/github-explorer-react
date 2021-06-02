import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 4px;
  }
  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    text-decoration: none;
  }
`;

export const RepositoryInfo = styled.div`
  header {
    display: flex;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 16px;
    }
    div {
      strong {
        color: #3d3d4d;
        font-size: 36px;
      }
      p {
        color: #737380;
        font-size: 18px;
      }
    }
  }
  ul {
    max-width: 500px;
    display: flex;
    margin-top: 40px;

    li {
      list-style: none;

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        color: #3d3d4d;
        font-size: 32px;
      }
      span {
        margin-top: 4px;
        display: block;
        color: #6c6c80;
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
    justify-content: space-between;
    

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 16px;
      list-style: none;

      strong {
        display: block;
        font-size: 24px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    i {
      color: #C9C9D4;
    }

   
  }
`;
