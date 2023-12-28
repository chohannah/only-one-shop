import styled from 'styled-components'
import { media, textStyle } from '../../styles/utils'

export const StyledCardInfo = styled.form`
  padding: 24px 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.coolGray[200]};

    .card-info-title {
      margin-bottom: 24px;
    }

    .card-info-content {
      ${textStyle('md')};
      margin-bottom: 24px;
      color: ${({ theme }) => theme.colors.bodyText};
    }

    .checkout-button {
      padding: 0 8px;
      width: 100%;
    }
  }

  ${media.greaterThan('tablet')`padding: 48px 24px;`}
`
