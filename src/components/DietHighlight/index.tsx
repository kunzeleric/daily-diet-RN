import { DietIndicator, DietInformationContainer, DietText } from "./styles";

type Props = { 
  dietPercentage: `${number}%` | number
}

export const DietHighlight = ({ dietPercentage }: Props) => {

  let formattedPercentage = dietPercentage;
  
  if (typeof dietPercentage === 'number') {
    formattedPercentage = `${dietPercentage*100}%`;
  } else {
    formattedPercentage = "00.00%";
  }

  return (
    <DietInformationContainer>
      <DietIndicator>{formattedPercentage}</DietIndicator>
      <DietText>das refeições dentro da dieta</DietText>
    </DietInformationContainer>
  );
};
