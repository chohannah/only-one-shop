import Balancer from 'react-wrap-balancer'

import { Grid } from '../grid'
import { Button } from '../button'

import { ArrowLongRight } from '../../assets/icons'

import {
  StyledSourcing,
  StyledSourcingWrapper,
  StyledSourcingLeft,
  StyledSourcingImage,
  StyledSourcingBraunLogo,
  StyledSourcingRight,
  StyledSourcingTitle,
  StyledSourcingButton,
} from './styles'

export const ProductSourcing = () => {
  return (
    <StyledSourcing>
      <Grid sm={4}>
        <StyledSourcingWrapper>
          <StyledSourcingLeft>
            <StyledSourcingImage>
              <img
                src="https://i.ibb.co/QCgc3f6/product-sourcing.jpg"
                alt="Braun T3 Radio, designed by Dieter Rams"
              />
            </StyledSourcingImage>

            <StyledSourcingBraunLogo>
              <img
                src="https://i.ibb.co/DL79pbD/braun-logo.png"
                alt="braun logo"
              />
            </StyledSourcingBraunLogo>
          </StyledSourcingLeft>

          <StyledSourcingRight>
            <StyledSourcingTitle>
              <Balancer>
                Hunters — Searching for your object of desire?
              </Balancer>
            </StyledSourcingTitle>

            <StyledSourcingButton>
              <Button variant="underlined" to="/products">
                We can help you source it
              </Button>
              <ArrowLongRight />
            </StyledSourcingButton>
          </StyledSourcingRight>
        </StyledSourcingWrapper>
      </Grid>
    </StyledSourcing>
  )
}
