import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #dbdbdb;
  border-radius: 10px;
  padding: 20px;
  width: 98%;
  height: 25px;
  margin-top: 2px;
  color: #1f1f1f;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    padding: 19px;
    width: 100%;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #4abdac;
      border-color: #4abdac;
    `}
  ${(props) =>
    props.isField &&
    css`
      color: #eeb6b7;
    `}
    input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 18px 20px;
    font-size: 1rem;
    color: #000;
    margin: 2px;
    height: 10px;

    @media (max-width: 800px) {
      padding: 11px 4px;
    }
  }

  label {
    font-size: 1.125rem;
    color: #000;
    margin: 10px;
    font-weight: bold;
  }
  svg {
    margin-right: 10px;

    @media (max-width: 800px) {
      height: 18px;
      width: 14px;
      margin-right: 3px;
    }
  }
`;
