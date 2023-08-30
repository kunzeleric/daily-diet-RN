import styled, { css } from "styled-components/native";

export const DietInformationContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-bottom: 16px;
`;

export const DietIndicator = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DietText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;