import styled, { css } from 'styled-components/native'

export type IsOnDietProps = "SUCCESS" | "FAIL";

type Props = {
  type: IsOnDietProps
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px;
  gap: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.gray_700};
`

export const ImageContainer = styled.Image`
  height: 288px;
  width: 224px;
`

export const TextContainer = styled.View`
  gap: 8px;
  align-items: center;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "SUCCESS" ? theme.COLORS.green_dark : theme.COLORS.red_dark};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  line-height: 20px;
`

