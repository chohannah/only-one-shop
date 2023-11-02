import styled from 'styled-components'

export const StyledProductDetails = styled.section`
  position: relative;
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
