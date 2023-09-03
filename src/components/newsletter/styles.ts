import styled from 'styled-components'

import { columnFlexbox, flexbox } from '../../styles/utils'
import { textStyle } from '../../styles/utils'
import { UseResponsive } from '../../hooks/useResponsive'

const NEWSLETTER_PADDING_SM = `32px`
const NEWSLETTER_PADDING_MD = `48px`

export const StyledNewsletter = styled.section<UseResponsive>`
  ${flexbox()};
  padding: ${NEWSLETTER_PADDING_SM};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;

  ${({ isTablet }) => isTablet && `padding: 0; height: 340px;`}
  ${({ isDesktop }) => isDesktop && `padding: 0; height: 410px;`}
`

export const StyledNewsletterLeft = styled.div<UseResponsive>`
  ${columnFlexbox('center', 'start')};
  flex-grow: 1;
  height: 100%;

  ${({ isTablet }) =>
    isTablet &&
    `width: 50vw; padding: ${NEWSLETTER_PADDING_SM} ${NEWSLETTER_PADDING_MD};`}
  ${({ isDesktop }) => isDesktop && `padding: ${NEWSLETTER_PADDING_MD};`}
`

export const StyledNewsletterTitle = styled.h3`
  margin-bottom: 32px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  span {
    ${textStyle('sm')};
    font-weight: 500;
  }
`

export const StyledNewsletterForm = styled.form<UseResponsive>`
  ${columnFlexbox('center', 'start')};
  width: 100%;

  button {
    ${flexbox('start', 'center')};
    ${textStyle('xxsWide')};
    margin-top: 32px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ isTablet }) => isTablet && `width: 30vw;`}
  ${({ isDesktop, theme }) =>
    isDesktop && `width: 30vw; button {font-size: ${theme.fontSizes.base}};`}
`

export const StyledNewsletterFormInput = styled.div<UseResponsive>`
  ${flexbox('start', 'center')};
  position: relative;
  width: 100%;

  &:first-child {
    margin-bottom: 24px;
  }

  .newsletter-input-circle {
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 0;
    margin-right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.red};
  }

  .newsletter-input {
    ${textStyle('xxs')};
    font-weight: 400;
    padding: 0 0 8px 20px;
    width: 100%;
    height: 34px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};

    &::-webkit-input-placeholder {
      ${textStyle('xxs')};
      font-weight: 400;
      opacity: 0.4;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `.newsletter-input {
      font-size: ${theme.fontSizes.base};

      &::-webkit-input-placeholder {
        font-size: ${theme.fontSizes.base};
      }}
      `};

  ${({ isDesktop, theme }) =>
    isDesktop &&
    `.newsletter-input {
      font-size: ${theme.fontSizes.base};

      &::-webkit-input-placeholder {
        font-size: ${theme.fontSizes.base};
      }}
      `};
`

export const StyledNewsletterImage = styled.div`
  ${flexbox()};
  width: 50vw;
  height: 100%;
  overflow: hidden;

  img {
    display: inline-block;
    height: 100%;
    object-fit: cover;
  }
`
