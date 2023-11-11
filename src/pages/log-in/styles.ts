import styled from 'styled-components'
import { GNB_HEIGHT } from '../../components/gnb/styles'
import { columnFlexbox, flexbox, textStyle } from '../../styles/utils'

export const StyledLogIn = styled.section`
  position: relative;
  margin-top: ${GNB_HEIGHT};
  padding: 48px 0;
  overflow: hidden;
`

export const StyledLogInHeader = styled.header`
  margin-bottom: 64px;

  .header-welcome {
    ${textStyle('xs')};
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }

  .header-title {
    ${textStyle('md')};
    margin-bottom: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }

  .google-button {
    ${flexbox()};
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.black};

    svg {
      margin-right: 12px;
    }
  }

  .circle-logo {
    position: absolute;
    top: calc(${GNB_HEIGHT} + 12px);
    right: -52px;
    width: 120px;
    height: 120px;
    z-index: ${({ theme }) => theme.levels.logoCircle};
  }
`

export const StyledLogInForm = styled.form`
  margin-bottom: 48px;

  .form-submit-button {
    margin-top: 64px;
    width: 100%;
  }
`

export const StyledLogInFooter = styled.footer`
  ${columnFlexbox()};

  .footer-title {
    ${textStyle('xs')};
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }
`
