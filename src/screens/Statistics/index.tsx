import { DietHighlight } from "@components/DietHighlight";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  BackButton,
  BigIndicator,
  Container,
  ContainerHeader,
  Content,
  Icon,
  KeyIndicator,
  SmallIndicator,
  SmallIndicatorContainer,
  TextIndicator,
  Title,
} from "./styles";

type RouteParams = {
  dietStatus: number;
};

export const Statistics = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { dietStatus } = route.params as RouteParams;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ContainerHeader type={dietStatus > 0.6 ? "SUCCESS" : "FAILURE"}>
        <BackButton onPress={() => handleGoBack()}>
          <Icon type={dietStatus > 0.6 ? "SUCCESS" : "FAILURE"} />
        </BackButton>
        <DietHighlight dietPercentage={dietStatus} />
      </ContainerHeader>
      <Content>
        <Title>Estatísticas Gerais</Title>
        <BigIndicator>
          <KeyIndicator>{10}</KeyIndicator>
          <TextIndicator>melhor sequência de pratos dentro da dieta</TextIndicator>
        </BigIndicator>
        <BigIndicator>
          <KeyIndicator>{100}</KeyIndicator>
          <TextIndicator>refeições registradas</TextIndicator>
        </BigIndicator>
        <SmallIndicatorContainer>
          <SmallIndicator type="SUCCESS">
            <KeyIndicator>{30}</KeyIndicator>
            <TextIndicator>refeições dentro da dieta</TextIndicator>
          </SmallIndicator>
          <SmallIndicator type="FAILURE">
            <KeyIndicator>{70}</KeyIndicator>
            <TextIndicator>refeições fora da dieta</TextIndicator>
          </SmallIndicator>
        </SmallIndicatorContainer>
      </Content>
    </Container>
  );
};
