import styled from 'styled-components'
import { flexbox } from '../../styles/utils'

const IMAGE_LENGTH = 5

export const StyledInstagram = styled.section`
  ${flexbox()};
  padding: 48px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warmGray[300]};
`

export const StyledInstagramImageGroup = styled.div`
  ${flexbox()};
`

export const StyledInstagramImage = styled.div`
  width: calc(100% / ${IMAGE_LENGTH});
  height: 16vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`
