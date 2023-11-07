import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  columnFlexbox,
  textStyle,
  lineClamp,
} from '../../styles/utils'

export const StyledCartItem = styled.article`
  ${flexbox('between', 'start')};
  padding: 24px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray[600]};

  .close-icon {
    margin-bottom: 24px;
  }
`
export const StyledCartItemIconButton = styled.button`
  ${flexbox()};
  pading: 4px;
`

export const StyledCartItemThumbnail = styled.div`
  ${inlineFlexbox()};
  flex-shrink: 0;
  margin-right: 8px;
  width: 56px;
  height: 56px;

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledCartItemMiddle = styled.article`
  flex-shrink: 0;
  padding-right: 16px;
  width: 60%;
`

export const StyledCartItemMiddleHeader = styled.div`
  ${columnFlexbox('start', 'start')};
  margin-bottom: 8px;

  .name {
    ${textStyle('xs')};
    ${lineClamp(2)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
  }

  .category {
    ${textStyle('xs')};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }
`
export const StyledCartItemMiddleDetails = styled.div`
  ${inlineFlexbox('start', 'center')};
  width: 100%;

  .decrement-button {
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

export const StyledCartItemRight = styled.div`
  ${columnFlexbox('between', 'end')};

  width: 100%;
  height: 100%;

  .price {
    ${textStyle('xs')};
    font-weight: 600;
  }
`
