import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DietHighlight } from "@components/DietHighlight";
import {
  Container,
  Icon,
  Header,
} from "./styles";


export const DietStatus = () => {
  const [dietStatus, setDietStatus] = useState(0.5375);
  const navigation = useNavigation();

  const handleOpenStatus = (dietStatus: number) => {
    navigation.navigate('statistics', { dietStatus });
  }

  return (
    <Container 
      type={dietStatus > 0.6 ? "SUCCESS" : "FAILURE"}
      onPress={() => handleOpenStatus(dietStatus)}
    >
      <Header>
        <Icon type={dietStatus > 0.6 ? "SUCCESS" : "FAILURE"}/>
      </Header>
      <DietHighlight dietPercentage={dietStatus} />
    </Container>
  );
};
