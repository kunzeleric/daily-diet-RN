import { useState } from "react";
import {
  Container,
  GreenIcon,
  Header,
  RedIcon,
} from "./styles";
import { DietHighlight } from "@components/DietHighlight";

export const DietStatus = () => {
  const [dietStatus, setDietStatus] = useState(0.9375);

  return (
    <Container type={dietStatus > 0.6 ? "SUCCESS" : "FAILURE"}>
      <Header>
        {dietStatus > 0.6 ? <GreenIcon /> : <RedIcon />}
      </Header>
      <DietHighlight dietPercentage={dietStatus} />
    </Container>
  );
};
