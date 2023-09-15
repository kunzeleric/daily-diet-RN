import { Button } from "@components/Button";
import { ButtonContainer, Container, ModalTitle, ModalWrapper } from "./styles";

interface ButtonProps {
  onClose: () => void;
}

export const ModalDelete = ({ onClose }: ButtonProps) => {
  return (
    <Container>
      <ModalWrapper>
        <ModalTitle>Deseja realmente excluir o registro da refeição?</ModalTitle>
        <ButtonContainer>
          <Button title="Cancelar" type="CANCEL" onPress={onClose} />
          <Button title="Sim, excluir" type="CONFIRM" />
        </ButtonContainer>
      </ModalWrapper>
    </Container>
  );
};
