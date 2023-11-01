import styled from 'styled-components'
import { flexbox, textStyle } from '../../styles/utils'

export const StyledBreadcrumbs = styled.nav`
  ${flexbox('start', 'start')};
  padding: 24px 0 48px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warmGray[100]};

  .label {
    ${textStyle('xxs')};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.coolGray[700]};

    &-last {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
