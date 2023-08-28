import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type IconStyleProps = "GREEN" | "RED";

type Props = {
  type: IconStyleProps;
};

export const Container = styled(TouchableOpacity)`
  height: 49px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.gray_400};
  border-radius: 6px;
  padding: 12px;
`;

export const DateAndNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const IconIndicator = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "GREEN" ? theme.COLORS.green_mid : theme.COLORS.red_mid,
  }))``;
