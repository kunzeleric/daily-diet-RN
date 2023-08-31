import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStyleProps;
};

export const ButtonIcon = ({ title, icon, type = "ADD", ...rest }: Props) => {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
      <Title type={type}>{title}</Title>
    </Container>
  );
};
