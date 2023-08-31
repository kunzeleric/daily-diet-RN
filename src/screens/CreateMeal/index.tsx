import { Input } from "@components/Input";
import {
  BackIcon,
  BackButton,
  Container,
  Header,
  InputFields,
  Title,
  DateTimeFields,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export const CreateMeal = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleGoBack()}>
          <BackIcon />
        </BackButton>
        <Title>Nova Refeição</Title>
      </Header>
      <InputFields>
        <Input label="Nome" />
        <Input 
          label="Descrição" 
          multiline numberOfLines={6} 
          textAlignVertical="top"
          style={{ paddingTop: 5}}
        />
        <DateTimeFields>
          <Input label="Data" />
          <Input label="Hora" />
        </DateTimeFields>
      </InputFields>
    </Container>
  );
};
