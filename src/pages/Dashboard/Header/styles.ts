import styled from 'styled-components';

export const Fundo = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #b0d7ff;
  margin-bottom: 2rem;
`;

export const Desenho = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.2rem;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 300px;
  margin: auto;
  position: relative;

  hr {
    border: 1px solid #eeb6b7;
    background-color: #eeb6b7;
    height: 2px;
    width: 85%;
  }

  @media (max-width: 800px) {
    height: 100px;
    width: 200px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fcfcff;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4.5rem;
  font-weight: bold;
  span {
    color: #f069b6;
    font-size: 4.5rem;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 380px;
  height: 50px;
  border-radius: 8px;
  background: #eeb6b7;
  color: #fff;
  margin: 1rem;
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

export const Link = styled.a`
  color: #3d3d3d;
  margin: 22px;
  text-align: right !important;
  font-weight: bold;
  font-size: 1.125rem;
  text-decoration: none;
`;

export const Text = styled.h3`
  color: #3d3d3d;
  font-size: 1.5rem;
  margin: auto;
  span {
    color: #fff;
    font-size: 1.5rem;
    margin: auto;
  }
  @media (max-width: 800px) {
    margin-left: 10px;
  }
`;
export const TextColor = styled(Text)`
  color: #696969;
  font-size: 1.125rem;
  margin: auto;
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

  @media (max-width: 450px) {
    display: none;
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
