import styled, { css } from 'styled-components'

import { inlineFlexbox, textStyle } from '../../styles/utils'

import { ButtonSize, ButtonVariant } from '.'

const underlinedButtonStyle = css`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.coolGray[900]};
  background-color: transparent;

  &:hover {
    &::after {
      transform: scaleX(0);
      transform-origin: right;
      transition-delay: 0;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.coolGray[900]};
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
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

function setButtonVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'underlined':
      return underlinedButtonStyle
    case 'filled':
      return filledButtonStyle
    default:
      return underlinedButtonStyle
  }
}

const button24 = css`
  ${textStyle('xxs')}
  padding-bottom: 4px;
  height: 24px;
`

const button34 = css`
  ${textStyle('base')}
  padding-bottom: 8px;
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
    case 34:
      return button34
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
  ${inlineFlexbox()}
  ${({ variant }) => setButtonVariant(variant)}
  ${({ size }) => setButtonSize(size)}
`
