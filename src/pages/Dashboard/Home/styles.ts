import styled from 'styled-components';

import Modal from 'react-bootstrap/Modal';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 3rem;

  p {
    font-size: 1.2rem;
    margin: 0.6rem;
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 1rem;
  min-inline-size: auto;
  border: 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 380px;
  height: 50px;
  border-radius: 8px;
  background: #eeb6b7;
  color: #fff;
  font-weight: bold;
  font-size: 1.125rem;
  cursor: pointer;
  transition-delay: 0.2s;
  border: 2px solid #eeb6b7;

  &:hover {
    background-color: white;
    color: #eeb6b7;
  }

  @media (max-width: 800px) {
    height: 40px;
    width: 180px;
  }
`;

export const Image = styled.img`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #4ba6ff;
  font-size: 5rem;
  margin: auto;
  font-weight: bold;
  font-family: monospace;
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  p {
    font-size: 1rem;
    text-align: center;
    color: #363636;
    word-wrap: break-word;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 1rem;
  min-inline-size: auto;
  border: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  background-color: #fff;
  min-inline-size: auto;
  border-radius: 20px;
  margin: 5% 8% 0 8%;

  svg {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 44px;
    width: 44px;

    @media (max-width: 760px) {
      height: 22px;
      width: 22px;
      margin: 3px;
    }
  }
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 98vw;

  p {
    font-size: 1rem;
    color: #363636;
  }

  div {
    background: #f3f3f3;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;

    h1 {
      color: #4ba6ff;
      border: 0;
      margin-top: 0.5rem;

      svg {
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        color: #eeb6b7;
        cursor: pointer;
      }
    }
    button {
      margin-top: 0.5rem;
    }
  }
`;
