import styled from 'styled-components'

import { inlineFlexbox, textStyle, flexbox } from '../../styles/utils'

export const StyledQtyCounter = styled.div`
  ${inlineFlexbox('start', 'center')};
  width: 100%;

  .increment-button,
  .decrement-button {
    ${flexbox()};
    pading: 4px;

    &.disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }

  .quantity {
    ${textStyle('xxs')};
    margin: 0 12px;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const StyledQtyCounterIconButton = styled.button`
  ${flexbox()};
  pading: 4px;
`

export const StyledQtyCounterText = styled.p``
