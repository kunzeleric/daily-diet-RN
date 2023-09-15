import { useState } from "react";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BackIcon,
  Container,
  Title,
  Header,
  MealDetailContainer,
  MealDetailWrapper,
  MealTitle,
  MealDescription,
  MealIndicatorContainer,
  IconIndicator,
  ButtonContainer,
} from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { ModalDelete } from "@components/ModalDelete";

export const MealDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Header type="SUCCESS">
          <BackButton onPress={() => handleGoBack()}>
            <BackIcon />
          </BackButton>
          <Title>Refeição</Title>
        </Header>
        <MealDetailWrapper>
          <MealDetailContainer>
            <MealTitle>Sanduíche</MealTitle>
            <MealDescription>
              Sanduíche de pão integral com atum e salada de alface e tomate.
            </MealDescription>
          </MealDetailContainer>
          <MealDetailContainer>
            <MealDescription style={{ fontWeight: "bold" }}>
              Data e Hora
            </MealDescription>
            <MealDescription>28/08/2023 às 16:00</MealDescription>
          </MealDetailContainer>
          <MealIndicatorContainer>
            <IconIndicator name="circle" type="GREEN" />
            <MealDescription>dentro da dieta</MealDescription>
          </MealIndicatorContainer>
        </MealDetailWrapper>
        <ButtonContainer>
          <ButtonIcon icon="edit" title="Editar refeição" />
          <ButtonIcon
            icon="delete"
            title="Excluir refeição"
            type="DELETE"
            onPress={() => openModal()}
          />
        </ButtonContainer>
      </Container>
      <Modal transparent={true} animationType="fade" visible={isOpen}>
        <ModalDelete onClose={openModal} />
      </Modal>
    </>
  );
};
