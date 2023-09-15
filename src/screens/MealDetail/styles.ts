import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { IconStyleProps } from "@components/RadioButton/styles";

type MealPropsStyle = "SUCCESS" | "FAIL";

type IconProps = {
  type: IconStyleProps;
};

export type MealProps = {
  type: MealPropsStyle;
};

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  flex: 1;
`;

export const Header = styled(SafeAreaView)<MealProps>`
  ${({ theme, type }) => css`
    color: ${theme.COLORS.gray_200};
    background-color: ${type === "SUCCESS"
      ? theme.COLORS.green_light
      : theme.COLORS.red_light};
  `}

  align-items: center;
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  bottom: 20px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.gray_200,
  size: 28,
}))`
  padding-left: 5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.gray_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDetailWrapper = styled.View`
  padding: 24px;
  gap: 24px;
  flex: 1;
`;

export const MealDetailContainer = styled.View`
  gap: 6px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const MealDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.gray_200};
`

export const MealIndicatorContainer = styled.View`
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 34px;
  width: 150px;
`

export const IconIndicator = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 10,
    color: type === "GREEN" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  })
)``;

export const ButtonContainer = styled.View`
  gap: 6px;
  padding: 24px;
`
