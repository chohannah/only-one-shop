import React from 'react'

import { Container } from './container'
import { Row, RowProps } from './row'
import { Column, ColumnProps } from './column'

type GridProps = ColumnProps & RowProps

export const Grid: React.FC<GridProps> = ({
  sm,
  md,
  lg = md,
  justifyContent,
  alignItems,
  className,
  children,
}) => {
  return (
    <Container className={className}>
      <Row justifyContent={justifyContent} alignItems={alignItems}>
        <Column sm={sm} md={md} lg={lg}>
          {children}
        </Column>
      </Row>
    </Container>
  )
}
