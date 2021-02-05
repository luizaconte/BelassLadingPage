import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import img from '../../../assets/01.jpeg';

export const Fundo = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 800px) {
    background-image: none;
    background-color: #fff0fa;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 60%;
  margin: 10% 50% 10% 2%;
  position: relative;
  background-color: #fff0fa;
  border-radius: 10px;

  hr {
    border: 1px solid #eeb6b7;
    background-color: #eeb6b7;
    height: 2px;
    width: 85%;
  }

  @media (max-width: 800px) {
    height: 70%;
    width: 90%;
    margin: 10% 38% 10% 2%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: #4ba6ff;
  font-size: 4.5rem;
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 380px;
  height: 50px;
  border-radius: 8px;
  background: #eeb6b7;
  color: #fff;
  margin: 16px;
  font-weight: bold;
  font-size: 1.125rem;
  margin-top: 38px;
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

export const Text = styled.h3`
  color: #3d3d3d;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Fieldset = styled.fieldset`
  margin-top: 16px;
  min-inline-size: auto;
  border: 0;
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 6px;
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
`;

export const Col = styled.div`
  margin: auto;
  border: 0;
  width: 48%;

  hr {
    border: 1px solid #eeb6b7;
    background-color: #eeb6b7;
    height: 5px;
    margin-top: 18px;
  }
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
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
