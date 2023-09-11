import { TouchableOpacityProps } from "react-native";
import {
  ButtonText,
  Container,
  DietButton,
  DietStyleProps,
  IconIndicator,
  IconStyleProps,
  NoDietButton,
} from "./styles";

type Props = TouchableOpacityProps &
  DietStyleProps & {
    type?: IconStyleProps;
    setIsDiet: (isDiet: boolean) => void;
    isDiet: boolean;
  };

export const RadioButton = ({
  isActive,
  isDiet,
  setIsDiet,
  ...rest
}: Props) => {
  const handleSetIsDiet = (diet: boolean) => {
    setIsDiet(diet);
  };
  return (
    <Container>
      <DietButton
        isActive={isDiet === true}
        onPress={() => handleSetIsDiet(true)}
        {...rest}
      >
        <IconIndicator name="circle" type="GREEN" />
        <ButtonText>Sim</ButtonText>
      </DietButton>
      <NoDietButton
        isActive={isDiet === false}
        onPress={() => handleSetIsDiet(false)}
        {...rest}
      >
        <IconIndicator name="circle" type="RED" />
        <ButtonText>Não</ButtonText>
      </NoDietButton>
    </Container>
  );
};
