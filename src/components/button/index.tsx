import React, { ReactNode, forwardRef, RefObject } from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from './styles'

export type ButtonSize = 24 | '24wide' | 34 | '34wide' | 54
export type ButtonVariant = 'underlined' | 'filled' | 'icon'

interface ButtonProps {
  variant: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  isLoading?: boolean
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  to?: string
  className?: string
  onBlur?: () => void
  onClick?: () => void
  onFocus?: () => void
}

type ButtonElement = HTMLButtonElement | HTMLAnchorElement

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      variant,
      className,
      disabled,
      size = 34,
      to,
      type = 'button',
      isLoading,
      children,
      onBlur,
      onClick,
      onFocus,
    },
    ref
  ) => {
    if (to) {
      return (
        <StyledButton
          ref={ref as RefObject<HTMLAnchorElement>}
          as={Link}
          to={to}
          variant={variant}
          size={size}
          className={className}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
        >
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton
        ref={ref as RefObject<HTMLButtonElement>}
        variant={variant}
        size={size}
        disabled={isLoading || disabled}
        type={type}
        className={className}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {children}
      </StyledButton>
    )
  }
)
