import styled from 'styled-components'
import { flexbox, media } from '../../styles/utils'

export const StyledProductDetails = styled.section`
  position: relative;

  .circle-logo {
    ${flexbox()};
    position: absolute;
    top: 32px;
    right: -46px;
    width: 108px;
    height: 108px;
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  ${media.greaterThan('tablet')`
  .circle-logo {
    top: 12px;
  right: -16px;
  }`}

  ${media.greaterThan('desktop')`
  .circle-logo {
    top: 8px;
    right: 20px;
  }`}
`

export const StyledProductDetailsAddToCartButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 16px 32px;
  z-index: ${({ theme }) => theme.levels.productDetailsAddToCartButton};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  .add-button {
    width: 100%;
  }
`
