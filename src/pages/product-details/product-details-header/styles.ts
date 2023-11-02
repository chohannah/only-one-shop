import styled from 'styled-components'

import {
  media,
  lineClamp,
  flexbox,
  textStyle,
  columnFlexbox,
  inlineFlexbox,
} from '../../../styles/utils'

export const StyledProductDetailsHeader = styled.header`
  padding: 24px 0;
  background-color: ${({ theme }) => theme.colors.warmGray[100]};
`

export const StyledProductDetailsHeaderImage = styled.div`
  ${flexbox()};
  margin-bottom: 64px;
  padding: 0 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledProductDetailsHeaderInfo = styled.div`
  ${columnFlexbox('start', 'start')};

  .add-button {
    margin: 24px 0;
    width: 100%;
  }

  .header-desc {
    margin: 24px 0;
  }

  ${media.greaterThan('tablet')`
  .header-desc { 
    ${lineClamp(4)};
    text-decoration: underline;

    &::after {
      content: '...more'
      position: absolute;
      top: 0;
      right: 0;
    }
    }`}
`

export const StyledProductDetailsHeaderTitle = styled.h2`
  ${textStyle('md')};
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.bodyText};

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.lg};`}
`

export const StyledProductDetailsHeaderCategory = styled.h3`
  ${textStyle('xs')};
  margin-bottom: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[500]};

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.base};`}
`

export const StyledProductDetailsHeaderPrice = styled.p`
  ${textStyle('xxs')};
  padding-bottom: 24px;
  width: 100%;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray[300]};
  color: ${({ theme }) => theme.colors.black};

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.sm};`}
`

export const StyledProductDetailsHeaderTablist = styled.div`
  margin-bottom: 24px;
  padding: 24px 0 16px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray[300]};

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

export const StyledProductDetailsHeaderDesigner = styled.div`
  width: 100%;

  .designer-title {
    ${textStyle('xxs')};
    margin-bottom: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
  }

  .designer-link {
    ${inlineFlexbox('start', 'center')};

    &:not(:last-child) {
      margin-right: 16px;
    }

    &-image {
      ${flexbox()};
      flex-shrink: 0;
      margin-right: 4px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      ${textStyle('xxs')};
      max-width: 98px;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.productText};
    }
  }

  ${media.greaterThan('tablet')`
    .designer-link {
      
      &:not(:last-child) {
        margin-right: 8px;
      }

      &-name {
        max-width: 87.5px;
      }
    }`}

  ${media.greaterThan('desktop')`
  .designer-title {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  .designer-link {
    &:not(:last-child) {
      margin-right: 16px;
    }

    &-image {
      width: 52px;
      height: 52px;
    }

    &-name {
      max-width: 120px;
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
  }
  `}
`
