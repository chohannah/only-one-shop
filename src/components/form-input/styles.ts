import styled from 'styled-components'

import { columnFlexbox, media, textStyle } from '../../styles/utils'
import { defaultEasing } from '../../styles/utils/animations'

export const StyledFormInput = styled.div`
  ${columnFlexbox('start', 'start')};
  padding: 12px 0;
  width: 100%;

  .form-input-label {
    ${textStyle('xxsWide')};
    margin-bottom: 8px;
  }

  .form-input-input {
    padding: 20px 16px;
    width: 100%;
    color: ${({ theme }) => theme.colors.coolGray[900]};
    border: 1px solid ${({ theme }) => theme.colors.coolGray[600]};
    background-color: ${({ theme }) => theme.colors.white};
    transition: border 250ms ${defaultEasing};

    &-wrapper {
      position: relative;
      width: 100%;

      .visibility-toggle-button {
        position: absolute;
        top: 35%;
        right: 6%;
      }
    }

    &::placeholder {
      ${textStyle('xxs')};
      color: ${({ theme }) => theme.colors.coolGray[600]};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.coolGray[900]};
    }
  }

  ${media.greaterThan('tablet')`
  .form-input-label {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
  
  .form-input-input {
    font-size: ${({ theme }) => theme.fontSizes.base};

    &::placeholder {
        font-size: ${({ theme }) => theme.fontSizes.base};
    }
  }
  `}
`
