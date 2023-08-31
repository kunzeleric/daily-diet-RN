import { DietStatusStyleProps } from "@components/DietStatus/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  type: DietStatusStyleProps;
};

export const Container = styled.View`
  justify-content: center;
`;

export const ContainerHeader = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.green_light : theme.COLORS.red_light};
  padding: 0 24px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 26,
  color: type === "SUCCESS" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  weight: "bold",
}))``;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
  padding-bottom: 24px;
`;

export const Content = styled.View`
  justify-content: center;
  padding: 24px;
`;

export const BigIndicator = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gray_500};
  border-radius: 8px;
  margin-bottom: 8px;
  min-height: 90px;
  max-height: 90px;
`;

export const KeyIndicator = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.gray_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const TextIndicator = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  padding: 8px 20px;
`;

export const SmallIndicatorContainer = styled.View`
  flex-direction: row;
  border-radius: 8px;
  width: 100%;
  gap: 12px;
  `;

export const SmallIndicator = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.green_light : theme.COLORS.red_light};
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 107px;
  max-height: 107px;
  border-radius: 8px;
`;
