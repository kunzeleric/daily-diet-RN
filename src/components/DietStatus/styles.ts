import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export type DietStatusStyleProps = "SUCCESS" | "FAILURE";

type Props = {
  type: DietStatusStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 112px;

  width: 100%;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  padding: 24px 16px;
  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.green_light : theme.COLORS.red_light};
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const GreenIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.green_dark,
  weight: 'bold'
}))`
  padding-right: 13px;
`;

export const RedIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.red_dark,
  weight: 'bold'
}))`
  padding-right: 13px;
`;
