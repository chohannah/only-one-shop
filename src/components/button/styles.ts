import styled, { css } from 'styled-components'

import { inlineFlexbox, textStyle } from '../../styles/utils'
import { defaultEasing } from './../../styles/utils/animations'

import { ButtonSize, ButtonVariant } from '.'

const underlinedButtonStyle = css`
  position: relative;
  padding-bottom: 4px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.coolGray[900]};
  background-color: transparent;

  &:hover {
    &::after {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.coolGray[900]};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.7s ${defaultEasing} 0.2s;
  }
`

const filledButtonStyle = css`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  &:disabled {
    backgound-color: ${({ theme }) => theme.colors.coolGray[700]};
  }
`

const iconButtonStyle = css`
  ${inlineFlexbox()};
  padding: 2px 4px;
  width: 100%;
  letter-spacing: ${({ theme }) => theme.letterSpacings.xxsWide};

  &:first-letter {
    text-transform: uppercase;
  }
`

function setButtonVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'underlined':
      return underlinedButtonStyle
    case 'filled':
      return filledButtonStyle
    case 'icon':
      return iconButtonStyle
    default:
      return underlinedButtonStyle
  }
}

const button24 = css`
  ${textStyle('xxs')}
  height: 24px;
`

const wideButton24 = css`
  ${textStyle('xxsWide')}
  height: 24px;
`

const button34 = css`
  ${textStyle('base')}
  height: 34px;
`

const wideButton34 = css`
  ${textStyle('baseWide')}
  height: 34px;
`

const button54 = css`
  ${textStyle('base')}
  height: 54px;
`

function setButtonSize(size: ButtonSize) {
  switch (size) {
    case 24:
      return button24
    case '24wide':
      return wideButton24
    case 34:
      return button34
    case '34wide':
      return wideButton34
    case 54:
      return button54
    default:
      return button34
  }
}

interface StyledButtonProps {
  variant: ButtonVariant
  size: ButtonSize
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${inlineFlexbox()};

  svg {
    display: inline-block;
    margin-left: 16px;
    width: 20px;
    height: 20px;
    transition: transform 200ms ${defaultEasing};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover {
    svg {
      transform: translateX(8px);
    }
  }

  ${({ variant }) => setButtonVariant(variant)};
  ${({ size }) => setButtonSize(size)};
`
