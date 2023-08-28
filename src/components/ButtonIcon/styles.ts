import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconStyleProps = "ADD" | "DELETE";

type Props = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 56px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;

  ${({ theme, type }) => css`
    background-color: ${type === "ADD"
      ? theme.COLORS.gray_200
      : theme.COLORS.white};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "ADD" ? theme.COLORS.white : theme.COLORS.gray_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "ADD" ? theme.COLORS.white : theme.COLORS.gray_200,
}))`  
  padding-right: 6px;`;
