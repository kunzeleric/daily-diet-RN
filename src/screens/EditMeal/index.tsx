import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { RadioButton } from "@components/RadioButton";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import {
  BackIcon,
  BackButton,
  Container,
  Header,
  Title,
  DateTimeFields,
  RadioTitle,
  InputFields,
  ButtonField,
} from "./styles";

export const EditMeal = () => {
  const [isDiet, setIsDiet] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    navigation.navigate('completed', { isDiet });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleGoBack()}>
          <BackIcon />
        </BackButton>
        <Title>Editar Refeição</Title>
      </Header>
      <InputFields>
        <Input label="Nome" />
        <Input
          label="Descrição"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          style={{ paddingTop: 5 }}
        />
        <DateTimeFields>
          <Input label="Data" placeholder="dd/mm/yyyy" />
          <Input label="Hora" placeholder="hh:mm" />
        </DateTimeFields>
      </InputFields>

      <InputFields>
        <RadioTitle>Está dentro da dieta?</RadioTitle>
        <RadioButton isDiet={isDiet} setIsDiet={setIsDiet} />
      </InputFields>
      <ButtonField>
        <Button title="Salvar alterações" type="CONFIRM" onPress={() => {}}/>
      </ButtonField>
    </Container>
  );
};
