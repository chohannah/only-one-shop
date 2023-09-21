import styled from 'styled-components'
import {
  columnFlexbox,
  flexbox,
  lineClamp,
  textStyle,
  media,
} from '../../styles/utils'

export const StyledFeaturedMagazine = styled.section`
  padding: 24px 0;
  width: 100%;

  ${media.greaterThan('tablet')`padding: 48px 0;`}
`

export const StyledFeaturedMagazineCardImage = styled.div`
  ${flexbox()};
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledFeaturedMagazineTextGroup = styled.div`
  ${columnFlexbox('center', 'start')};
  padding: 40px 32px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.warmGray[200]};

  button {
    ${textStyle('xxsWide')};
  }

  ${media.greaterThan('tablet')`button {font-size: ${({ theme }) =>
    theme.fontSizes.baseWide}};`}
`

export const StyledFeaturedMagazineCategory = styled.h4`
  ${textStyle('xxsWide')};
  margin-bottom: 16px;
  font-weight: 400;
  ${media.greaterThan('tablet')`margin-bottom: 24px; font-size: ${({ theme }) =>
    theme.fontSizes.base};`}
`
export const StyledFeaturedMagazineTitle = styled.h1`
  margin-bottom: 16px;
  span {
    ${textStyle('md')};
    font-weight: 500;
  }
  ${media.greaterThan('tablet')`margin-bottom: 24px; span {font-size: ${({
    theme,
  }) => theme.fontSizes.lg};}`}
`

export const StyledFeaturedMagazineDesc = styled.p`
  ${textStyle('xxsWide')};
  ${lineClamp(2)};
  margin-bottom: 16px;

  ${media.greaterThan('tablet')`margin-bottom: 48px; font-size: ${({ theme }) =>
    theme.fontSizes.base}; -webkit-line-clamp: 3;`}
`
