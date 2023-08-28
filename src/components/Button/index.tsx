import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export const Button = ({ title, type = "CONFIRM", ...rest }: Props) => {
  return (
    <Container type={type}>
      <Title type={type}>{title}</Title>
    </Container>
  );
};
