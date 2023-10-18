import styled from 'styled-components'

import {
  columnFlexbox,
  flexbox,
  lineClamp,
  textStyle,
  media,
} from '../../styles/utils'

export const StyledProductCard = styled.article`
  margin-bottom: 16px;

  .product-card-add-button {
    width: 100%;
  }

  ${media.greaterThan('tablet')`margin-bottom: 32px`}
`

export const StyledProductCardThumbnailContainer = styled.div`
  ${flexbox()};
  margin-bottom: 16px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledProductCardTextGroup = styled.div`
  ${columnFlexbox('start', 'start')};
  margin-bottom: 16px;
`

export const StyledProductCardName = styled.h3`
  ${textStyle('xs')};
  ${lineClamp(1)};
  margin-bottom: 4px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.coolGray[900]};
`

export const StyledProductCardPrice = styled.p`
  ${textStyle('xs')};
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[900]};
`
