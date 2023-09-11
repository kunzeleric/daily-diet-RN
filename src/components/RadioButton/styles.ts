import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled, { css } from "styled-components/native";

export type IconStyleProps = "GREEN" | "RED";

type IconProps = {
  type: IconStyleProps;
};

export type DietStyleProps = {
  isActive?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DietButton = styled(TouchableOpacity)<DietStyleProps>`
  ${({ theme, isActive }) =>
    css`
      border: ${isActive ? `1px solid ${theme.COLORS.green_dark}` : "none"};
      background-color: ${isActive
        ? theme.COLORS.green_light
        : theme.COLORS.gray_600};
    `}
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 6px;
  width: 160px;
  height: 50px;
`;

export const NoDietButton = styled(TouchableOpacity)<DietStyleProps>`
  ${({ theme, isActive }) =>
    css`
      border: ${isActive ? `1px solid ${theme.COLORS.red_dark}` : "none"};
      background-color: ${isActive
        ? theme.COLORS.red_light
        : theme.COLORS.gray_600};
    `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 6px;
  width: 160px;
  height: 50px;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_200};
  `}
`;

export const IconIndicator = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 14,
    color: type === "GREEN" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  })
)``;
