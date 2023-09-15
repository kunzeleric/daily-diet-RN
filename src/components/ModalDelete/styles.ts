import styled, { css } from 'styled-components/native';
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`

export const ModalWrapper = styled.View`
  width: 327px;
  height: 192px;
  gap: 30px;
  background-color: #FFF;
  border-radius: 10px;
  padding: 24px;
`

export const ModalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 6px;
`;