import styled from 'styled-components'
import { columnFlexbox, flexbox, textStyle } from '../../styles/utils'

export const StyledCartDropdown = styled.aside`
  position: relative;
  z-index: ${({ theme }) => theme.levels.cartDropdownToggle};
`

export const StyledCartCounterButton = styled.button`
  ${flexbox()};
  ${textStyle('xs')};
  position: relative;
  margin-left: 12px;
  width: 26px;
  height: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.coolGray[900]};
  border-radius: 50%;
`

interface StyledCartDropdownContentProps {
  isCartOpen: boolean
}

export const StyleCartDropdownContent = styled.div<StyledCartDropdownContentProps>`
  ${columnFlexbox()};
  position: absolute;
  right: 0;
  width: 390px;
  background-color: ${({ theme }) => theme.colors.white};
`

export const StyledCartDropdownHeader = styled.header`
  ${flexbox('between', 'center')};
  margin-bottom: 24px;
  padding: 20px 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.coolGray[100]};

  button {
    ${textStyle('xs')};
    padding-bottom: 4px;
    height: 24px;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }
`

export const StyledCartDropdownTitle = styled.h2`
  ${textStyle('xs')};
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.coolGray[700]};
`

export const StyledCartDropdownList = styled.ul`
  width: 100%;
  max-height: 320px;
  overflow-y: auto;
`

export const StyledCartDropdownFooterTotal = styled.div`
  ${flexbox('between', 'center')};
  margin: 24px 0 48px;
`

export const StyledCartDropdownFooterTotalTitle = styled.h4`
  ${textStyle('xs')};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[700]};
`

export const StyledCartDropdownFooterTotalPrice = styled.p`
  ${textStyle('base')};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bodyText};
`

export const StyledCartDropdownFooterText = styled.p`
  ${textStyle('xs')};
  margin-bottom: 24px;
  width: 100%;
  weight: 500;
  text-wrap: wrap;
  text-align: center;
  color: ${({ theme }) => theme.colors.coolGray[700]};
`

//List Item

export const StyledCartDropdownListItem = styled.li`
  ${flexbox('start', 'start')}
  padding: 0 16px 24px;
  margin-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray[600]};

  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledCartDropdownListItemThumbnail = styled.div`
  ${flexbox()};
  margin-right: 8px;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledCartDropdownListItemInfo = styled.div`
  ${columnFlexbox('start', 'start')}
  flex-grow: 1;
`

export const StyledCartDropdownListItemInfoTitle = styled.h3`
  ${textStyle('xs')};
  font-weight: 600;
  color: black;
`

export const StyledCartDropdownListItemInfoCategory = styled.h4`
  ${textStyle('xs')};
  margin-bottom: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.coolGray[700]};
`

export const StyledCartDropdownListItemInfoQuantity = styled.p`
  ${flexbox()};
  ${textStyle('xs')};
  font-weight: 400;
  color: black;

  button {
    padding: 2px;

    &:first-child {
      margin-right: 6px;
    }

    &:last-child {
      margin-left: 6px;
    }
  }
`

export const StyledCartDropdownListItemPrice = styled.p`
  ${textStyle('base')};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.bodyText};
  flex-shrink: 1;
`

export const StyledCartDropdownFooter = styled.footer`
  padding: 0 8px;
  width: 100%;

  a {
    ${flexbox()};
    margin-bottom: 16px;
    width: 100%;
  }
`
