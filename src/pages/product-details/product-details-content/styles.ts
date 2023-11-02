import styled from 'styled-components'

import { flexbox, textStyle, media } from '../../../styles/utils'

export const StyledProductDetailsContent = styled.section`
  ${flexbox()};
  margin-bottom: 92px;
`

export const StyledProductDetailsContentDesc = styled.div`
  .desc-title {
    ${textStyle('lg')};
    margin-bottom: 24px;
    font-weight: 500;
  }

  .desc-content {
    ${textStyle('base')};
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.productText};
  }
`

export const StyledProductDetailsContentTablist = styled.div`
  margin: 64px 0 16px;
  width: 100%;

  .tablist {
    ${flexbox('start', 'center')};
    margin-bottom: 24px;

    &-item {
      ${textStyle('xxs')};
      color: ${({ theme }) => theme.colors.black};

      .active {
        text-decoration: underline;
      }

      &:first-child {
        margin-right: 24px;
      }
    }

    &-item-content {
      ${textStyle('xxs')};
      height: 108px;
      color: ${({ theme }) => theme.colors.productText};

      .dimensions,
      .weight,
      .item-number {
        ${flexbox('start', 'center')};

        dt {
          margin-bottom: 4px;
          width: 104px;
        }
      }

      .link-to-shipping {
        text-decoration: underline;
      }

      &.hidden {
        display: none;
      }
    }
  }

  ${media.greaterThan('desktop')`.tablist {
      &-item,
      &-item-content {
        font-size: ${({ theme }) => theme.fontSizes.base};
      }
    }`}
`
