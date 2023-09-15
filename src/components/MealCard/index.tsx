import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Time,
  DateAndNameContainer,
  IconIndicator,
  IconStyleProps,
  Name,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  type?: IconStyleProps;
};

export const MealCard = ({ title, time, type, ...rest }: Props) => {
  const navigation = useNavigation();

  const handleMealDetail = () => {
    navigation.navigate("mealDetail");
  };
  return (
    <Container {...rest} onPress={() => handleMealDetail()}>
      <DateAndNameContainer>
        <Time>{time}</Time>
        <Name>{title}</Name>
      </DateAndNameContainer>
      <IconIndicator name="circle" type={type} />
    </Container>
  );
};
