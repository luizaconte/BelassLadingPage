import React from 'react';
import {
  TiUserOutline,
  FaWhatsapp,
  GiModernCity,
  GrMapLocation,
  MdEmail,
  RiMoneyDollarCircleFill,
} from 'react-icons/all';

import { toast } from 'react-toastify';

import img from '../../../assets/logo.jpg';

import Input from '../../../components/Input';

import {
  Container,
  Fundo,
  Button,
  Text,
  Title,
  Fieldset,
  Form,
  Desenho,
  Field,
  FieldGroup,
  Col,
  Row,
  TextColor,
} from './styles';

const Header: React.FC = () => {
  async function handleSubmit(): Promise<void> {
    try {
      toast.success(
        'Cadastrado com sucesso! Entraremos em contato em alguns instantes.',
      );
    } catch (e) {
      toast.error(`Não foi possível cadastrar ! `);
      console.log(e);
    }
  }

  return (
    <>
      <Fundo>
        <Col>
          <Row>
            <Title>
              Invista em <span>estética</span>!
            </Title>
          </Row>

          <Row>
            <Text>
              A franquia <span>Belass</span> oferece um negócio de alto
              rendimento. <br />
              Valores promocionais de investimento a partir de
              <span>R$ 70 mil!!</span>
            </Text>
          </Row>
          <hr />
        </Col>

        <Container>
          <Form onSubmit={handleSubmit}>
            <Desenho src={img} />
            <hr />

            <Fieldset>
              <TextColor>
                Cadastre-se e garanta seu valor promocional!
              </TextColor>
              <FieldGroup>
                <Field>
                  <Input
                    name="nameUser"
                    type="text"
                    placeholder="Nome completo"
                    required
                    icon={TiUserOutline}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    required
                    icon={MdEmail}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Input
                    name="whatsapp"
                    type="text"
                    placeholder="WhatsApp"
                    required
                    icon={FaWhatsapp}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Input
                    name="city"
                    type="text"
                    placeholder="Cidade"
                    required
                    icon={GiModernCity}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Input
                    name="state"
                    type="text"
                    placeholder="Estado"
                    required
                    icon={GrMapLocation}
                  />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <Input
                    name="money"
                    type="text"
                    placeholder="Investimento"
                    required
                    icon={RiMoneyDollarCircleFill}
                  />
                </Field>
              </FieldGroup>
            </Fieldset>

            <Button type="submit">Cadastrar</Button>
          </Form>
        </Container>
      </Fundo>
    </>
  );
};

export default Header;
