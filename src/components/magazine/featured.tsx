import Balancer from 'react-wrap-balancer'
import { useResponsive } from '../../hooks/useResponsive'

import { SectionHeader } from '../section-header'
import { Container, Row, Column } from '../grid'
import { Button } from '../button'
import {
  StyledFeaturedMagazine,
  StyledFeaturedMagazineCardImage,
  StyledFeaturedMagazineCategory,
  StyledFeaturedMagazineDesc,
  StyledFeaturedMagazineTextGroup,
  StyledFeaturedMagazineTitle,
} from './styles'

export const FeaturedMagazine = () => {
  const { isMobile } = useResponsive()

  return (
    <StyledFeaturedMagazine>
      <Container>
        <Row>
          <SectionHeader title={isMobile ? 'Magazine' : 'From the Magazine'} />
        </Row>

        <Row>
          <Column sm={4} md={6} lg={6}>
            <StyledFeaturedMagazineCardImage>
              <img
                src={`${process.env.PUBLIC_URL}/images/magazine/dieter-rams-10-principles-of-good-design/main.jpg`}
                alt="Featured magazine thumbnail"
                aria-label="Braun TP1(an audio proudct of Braun) that designed by Dieter Rams with a background that 'principles of good esigns' is repeately written vertically."
              />
            </StyledFeaturedMagazineCardImage>
          </Column>

          <Column sm={4} md={6} lg={6}>
            <StyledFeaturedMagazineTextGroup>
              <StyledFeaturedMagazineCategory>
                Design
              </StyledFeaturedMagazineCategory>

              <StyledFeaturedMagazineTitle>
                <Balancer>Dieter Rams 10 principles of good Design</Balancer>
              </StyledFeaturedMagazineTitle>

              <StyledFeaturedMagazineDesc>
                Dieter Rams famous 10 principles of good design have become
                iconic and have inspired designers across the world.
              </StyledFeaturedMagazineDesc>

              <Button
                to="/magazine/dieter-rams-10-principles-of-good-design"
                variant="underlined"
                size={isMobile ? 24 : 34}
              >
                Read more
              </Button>
            </StyledFeaturedMagazineTextGroup>
          </Column>
        </Row>
      </Container>
    </StyledFeaturedMagazine>
  )
}
