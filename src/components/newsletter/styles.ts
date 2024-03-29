import styled from 'styled-components'

import { columnFlexbox, flexbox, textStyle, media } from '../../styles/utils'

const NEWSLETTER_PADDING_SM = `32px`
const NEWSLETTER_PADDING_MD = `48px`

export const StyledNewsletter = styled.section`
  ${flexbox()};
  padding: ${NEWSLETTER_PADDING_SM};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;

  ${media.greaterThan('tablet')`padding: 0; height: 340px;`}
  ${media.greaterThan('desktop')`height: 410px;`}
`

export const StyledNewsletterLeft = styled.div`
  ${columnFlexbox('center', 'start')};
  flex-grow: 1;
  height: 100%;

  ${media.greaterThan(
    'tablet'
  )`width: 50vw; padding: ${NEWSLETTER_PADDING_SM} ${NEWSLETTER_PADDING_MD};`}
  ${media.greaterThan('desktop')`padding: ${NEWSLETTER_PADDING_MD};`}
`

export const StyledNewsletterTitle = styled.h3`
  margin-bottom: 32px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  span {
    ${textStyle('sm')};
    width: 100%;
    font-weight: 500;
  }
`

export const StyledNewsletterForm = styled.form`
  ${columnFlexbox('center', 'start')};
  width: 70vw;

  button {
    ${flexbox('start', 'center')};

    ${textStyle('xxsWide')};
    margin-top: 32px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${media.greaterThan('tablet')`width: 30vw;`}
  ${media.greaterThan('desktop')`button {font-size: ${({ theme }) =>
    theme.fontSizes.base}};`}
`

export const StyledNewsletterFormInput = styled.div`
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

  ${media.greaterThan('tablet')`.newsletter-input {
      font-size: ${({ theme }) => theme.fontSizes.base};

      &::-webkit-input-placeholder {
        font-size: ${({ theme }) => theme.fontSizes.base};
      }}`}
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
