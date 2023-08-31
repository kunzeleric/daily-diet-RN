import { TextInputProps } from "react-native";
import { Container, Label, Wrapper } from "./styles";

type Props = TextInputProps & {
  label: string
};

export const Input = ({label, ...rest}: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Container {...rest}/>
    </Wrapper>
  );
};
