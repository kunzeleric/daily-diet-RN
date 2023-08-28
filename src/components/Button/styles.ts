import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "CONFIRM" | "CANCEL";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  height: 50px;

  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    background-color: ${type} === "CONFIRM" ? ${theme.COLORS.gray_200} : ${theme.COLORS.white};
  `}
`;

export const Title = styled.View<Props>`
  ${({ theme, type }) => css`
    color: ${type} === "CONFIRM" ? ${theme.COLORS.white} : ${theme.COLORS.gray_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
