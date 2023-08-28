import { Container, Logo, Profile } from "./styles";
import logo from "@assets/images/logo.png";
import profile from "@assets/images/profile.png";

export const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Profile source={profile} />
    </Container>
  );
};
