import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  gap: 40px;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.gray_700};
`

export const MealTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding-bottom: 8px;
`
export const HeaderSectionList = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding-bottom: 8px;
  padding-top: 8px;
`