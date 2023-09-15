import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "CONFIRM" | "CANCEL";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 56px;
  max-height: 56px;
  padding: 0 15px 0 15px;

  flex: 1;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) => css`
    background-color: ${type === "CONFIRM" ? theme.COLORS.gray_200 : theme.COLORS.white};
    border: ${type === 'CANCEL' ? `1px solid ${theme.COLORS.gray_100}` : "none"};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "CONFIRM" ? theme.COLORS.white : theme.COLORS.gray_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
