import styled from 'styled-components'

import { columnFlexbox, flexbox, media, textStyle } from '../../styles/utils'
import { GNB_HEIGHT } from '../../components/gnb/styles'
import { DEFAULT_CONTAINER_GUTTER } from '../../components/grid/styles'

export const StyledLogIn = styled.section`
  ${flexbox()};
  position: relative;
  margin-top: ${GNB_HEIGHT};
  padding: 48px 0;
  overflow: hidden;

  ${media.greaterThan('tablet')`
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0;
  `}
`

export const StyledLogInContentGroup = styled.div`
  padding: 64px calc(${DEFAULT_CONTAINER_GUTTER}* 4);
  width: 100%;

  ${media.greaterThan('tablet')`
    width: 100%;
    padding-right: calc(${DEFAULT_CONTAINER_GUTTER}* 12);
  `}

  ${media.greaterThan('desktop')`
  padding-left: calc(${DEFAULT_CONTAINER_GUTTER}* 6);
  `}
`

export const StyledLogInContentHeader = styled.header`
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

  ${media.greaterThan('tablet')`
    .header-title {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }

    .circle-logo {
      top: calc(${GNB_HEIGHT} + 30px);
      right: -18px;
      width: 135px;
      height: 135px;
    }
  `}
`

export const StyledLogInContentForm = styled.form`
  margin-bottom: 48px;

  .form-submit-button {
    margin-top: 64px;
    width: 100%;
  }
`

export const StyledLogInContentFooter = styled.footer`
  ${columnFlexbox()};

  .footer-title {
    ${textStyle('xs')};
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }
`

export const StyledLogInImage = styled.div`
  ${flexbox()};
  flex-shrink: 0;
  width: 50vw;
  height: auto;
  overflow: hidden;

  img {
    display: inline-block;
    height: 100%;
    object-fit: cover;
  }
`
