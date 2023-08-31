import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  gap: 6px;
`;

export const Container = styled(TextInput)`
  min-height: 48px;
  border-radius: 6px;
  width: 100%;
  min-width: 154px;
  padding-left: 10px;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.gray_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.gray_100};
    border: 1px solid ${theme.COLORS.gray_500};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.gray_200};
  `}
`;
