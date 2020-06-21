import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const ContainerTotal = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  height: 60px;

  span {
    font-size: 12px;
    ${(props) =>
      props.isErrored &&
      css`
        color: #c53030;
      `}
  }
  & + div {
    margin-left: 10px;
  }
`;

export const Container = styled.div<ContainerProps>`
  background: #fff;
  color: #000;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 16px;
  width: 100%;
  display: flex;
  height: 48px;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #232129;
    `}
  ${(props) => props.isFilled && css``}
    input {
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 0;
    color: #000;
    &::placeholder {
      color: #000;
    }

  }

  & + div {
    margin-left: 10px;
  }
  svg {
    margin-right: 16px;
  }

`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
