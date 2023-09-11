import { useRoute, useNavigation } from "@react-navigation/native";
import successDiet from "@assets/images/success.png";
import failDiet from "@assets/images/fail.png";
import { Container, ImageContainer, Subtitle, TextContainer, Title } from "./styles";
import React from "react";
import { Button } from "@components/Button";

type RouteParams = {
  isDiet: boolean;
};

export const Completed = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { isDiet } = route.params as RouteParams;

  const text = isDiet
    ? "Você continua dentro da dieta. Muito bem!"
    : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!";
    
    const handleGoBack = () => {
      navigation.navigate('home');
    }

  return (
    <Container>
      <TextContainer>
        <Title type={isDiet ? "SUCCESS" : "FAIL"}>
          {isDiet ? "Continue assim!" : "Que pena!"}
        </Title>
        <Subtitle>{text}</Subtitle>
      </TextContainer>
      <ImageContainer source={isDiet ? successDiet : failDiet} />
      <Button type="CONFIRM" title="Ir para página principal" onPress={() => handleGoBack()}/>
    </Container>
  );
};
