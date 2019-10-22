import styled from 'styled-components';
import { darken } from 'polished';
export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 350px;
  width: 100%;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      height: 44px;
      padding: 0 15px;
      margin-bottom: 10px;
      border: 0;
      color: #fff;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.1);
      &::placeholder {
        font-size: 1.2em;
        color: #fff;
      }
    }

    button {
      height: 44px;
      border: 0;
      border-radius: 4px;
      background: #3b9eff;
      font-weight: bold;
      font-size: 1.2em;
      color: #fff;
      transition: backgorund 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    a {
      color: #fff;
      opacity: 0.7;
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 10px;
      &:hover {
        opacity: 0.3;
      }
    }
  }
`;

export const A = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;
