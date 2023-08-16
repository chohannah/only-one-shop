import React, { ReactNode } from 'react'
import { StyledContainer } from './styles'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return <StyledContainer className={className}>{children}</StyledContainer>
}
