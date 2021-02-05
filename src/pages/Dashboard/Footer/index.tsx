import React from 'react';

import img1 from '../../../assets/02.jpeg';

import img2 from '../../../assets/03.jpeg';

import img3 from '../../../assets/04.jpeg';

import { Container, Title, Content, FieldGroup, Field, Image } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FieldGroup>
        <Field className="title">
          <Title>
            INVISTA EM SEUS SONHOS E DÊ O PRÓXIMO PASSO RUMO AO SUCESSO!
          </Title>
        </Field>
      </FieldGroup>

      <Content>
        <FieldGroup>
          <Field>
            <Image src={img1} alt="" />
            <p>
              Estrutura Enxuta (menor custo fixo, folha de pagamento,
              manutenção…)
            </p>
          </Field>

          <Field>
            <Image src={img2} alt="" />
            <p>Operação simplificada, prática, informações na palma da mão</p>
          </Field>

          <Field>
            <Image src={img3} alt="" />
            <p>Formato compacto, o lucro maior, sem dores de cabeça!</p>
          </Field>
        </FieldGroup>
      </Content>
      <br />
    </Container>
  );
};

export default Footer;
