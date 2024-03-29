import React, { ReactNode } from 'react'
import { StyledRow } from './styles'

export interface RowProps {
  justifyContent?: string
  alignItems?: string
  className?: string
  children?: ReactNode
}

export const Row: React.FC<RowProps> = ({
  justifyContent,
  alignItems,
  className,
  children,
}) => {
  return (
    <StyledRow
      className={className}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledRow>
  )
}
