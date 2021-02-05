import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #eeb6b7 !important;
`;

export const Image = styled.img`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 0;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 4px #fff solid;

  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 400px) {
    width: 78px;
    height: 78px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  margin: 5rem 1rem auto 1rem;
  font-family: monospace;
  text-align: center;
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  p {
    font-size: 1.25rem;
    text-align: center;
    color: #000;
    background-color: #fff;
    margin: 1.25rem 1.25rem 0 1.25rem;
    border-radius: 10px;
  }
`;

export const FieldGroup = styled.div`
  min-inline-size: auto;
  border: 0;
  justify-content: center;
  align-items: center;
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
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
