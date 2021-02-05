import React, { useState } from 'react';
import {
  FaStar,
  FiXCircle,
  TiUserOutline,
  MdEmail,
  FaWhatsapp,
  GiModernCity,
  GrMapLocation,
  RiMoneyDollarCircleFill,
} from 'react-icons/all';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import img from '../../../assets/home.png';

import {
  Image,
  Container,
  Title,
  Content,
  FieldGroup,
  Field,
  Button,
  ModalStyled,
  Fieldset,
  Form,
} from './styles';
import Input from '../../../components/Input';

const Home: React.FC = () => {
  const [modalConfirm, setModalConfirm] = useState(false);

  function handleAddModal(): void {
    modalConfirm ? setModalConfirm(false) : setModalConfirm(true);
  }

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
      <Container>
        <FieldGroup>
          <Field className="title">
            <Title>Principais serviços</Title>
            <p>
              Tenha uma gestão com suporte da franqueadora, auxiliando no
              cotidiano, oportunidades de vendas, gestão de qualidade em um
              formato compacto, com alto rendimento maior.
            </p>
            <Button type="button" onClick={handleAddModal}>
              Cadastre-se
            </Button>
          </Field>

          <Image src={img} />
        </FieldGroup>

        <Content>
          <FieldGroup>
            <Field>
              <FaStar color="#eeb6b7" />
              <p>Harmonização Facial, Botox e muito mais!</p>
            </Field>

            <Field>
              <FaStar color="#eeb6b7" />
              <p>Tratamentos faciais como: Manchas, Melasma..</p>
            </Field>

            <Field>
              <FaStar color="#eeb6b7" />
              <p>Tratamentos corporais para redução de medidas,Celulite..</p>
            </Field>

            <Field>
              <FaStar color="#eeb6b7" />
              <p> Depilação a Laser: Pernas, axilas, virilha, buço.. </p>
            </Field>
          </FieldGroup>
        </Content>
        <br />
      </Container>

      {modalConfirm && (
        <ModalStyled show={modalConfirm} onHide={handleAddModal} size="lg">
          <Modal.Header>
            <h1>
              Invista no seu sucesso!
              <FiXCircle size={30} onClick={handleAddModal} />
            </h1>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Fieldset>
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
                      name="email"
                      type="email"
                      placeholder="Seu melhor e-mail"
                      required
                      icon={MdEmail}
                    />
                  </Field>
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
          </Modal.Body>
        </ModalStyled>
      )}
    </>
  );
};

export default Home;
