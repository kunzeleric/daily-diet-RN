import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  flex: 1;
`;

export const Header = styled(SafeAreaView)`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_200};
    background-color: ${theme.COLORS.gray_500};
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

export const InputFields = styled.View`
  gap: 12px;
  padding: 24px;
`;

export const DateTimeFields = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonField = styled.View`
  padding: 24px;
  padding-top: 100px;
`;
