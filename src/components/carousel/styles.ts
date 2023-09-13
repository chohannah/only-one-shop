import styled from 'styled-components'
import { positionCenter } from '../../styles/utils'

export const StyledSlider = styled.div`
  overflow: hidden;
`

export const StyledSliderItem = styled.div`
  figure {
    position: relative;
    margin: 0;
    padding-bottom: 100%;
    width: 100%;
    height: 0;

    img {
      ${positionCenter()};
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
