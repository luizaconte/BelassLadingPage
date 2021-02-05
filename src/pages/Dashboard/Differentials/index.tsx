import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import {
  FiXCircle,
  TiUserOutline,
  MdEmail,
  FaWhatsapp,
  GiModernCity,
  GrMapLocation,
  RiMoneyDollarCircleFill,
} from 'react-icons/all';
import Input from '../../../components/Input';

import {
  Container,
  Fundo,
  Button,
  Text,
  Title,
  Fieldset,
  Form,
  Field,
  FieldGroup,
  Row,
  ModalStyled,
} from './styles';

const Differentials: React.FC = () => {
  async function handleSubmit(): Promise<void> {
    try {
      toast.success('Cadastrado com sucesso!');
    } catch (e) {
      toast.error(`Não foi possível cadastrar ! `);
      console.log(e);
    }
  }
  const [modalConfirm, setModalConfirm] = useState(false);

  function handleAddModal(): void {
    modalConfirm ? setModalConfirm(false) : setModalConfirm(true);
  }

  return (
    <>
      <Fundo>
        <Container>
          <Row>
            <Title>Diferenciais Belass</Title>
            <hr />
            <Text>
              - Baixo Investimento
              <br />- Estrutura Compacta
              <br />- Gestão Simplificada
              <br />- Alta Rentabilidade
              <br />- Investidor pode ter mais de uma unidade
            </Text>
            <Button type="button" onClick={handleAddModal}>
              Quero saber mais
            </Button>
          </Row>
        </Container>
      </Fundo>

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

export default Differentials;
