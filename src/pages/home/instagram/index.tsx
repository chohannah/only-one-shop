import { useResponsive } from '../../../hooks/useResponsive'

import { Container, Row, Column } from '../../../components/grid'
import { SectionHeader } from '../../../components/section-header'
import {
  StyledInstagram,
  StyledInstagramImage,
  StyledInstagramImageGroup,
} from './styles'

export const Instagram = () => {
  const { isMobile } = useResponsive()

  const IMAGE_LENGTH = 5
  const images = []
  for (let i = 1; i <= IMAGE_LENGTH; i++) {
    images.push(i)
  }

  return (
    <>
      {!isMobile ? (
        <StyledInstagram>
          <Container>
            <Row>
              <SectionHeader title="Follow us on Instagram" to="/" />
            </Row>

            <Row>
              <Column sm={4}>
                <StyledInstagramImageGroup>
                  {images.map((index) => (
                    <StyledInstagramImage>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/instagram/instagram-${index}.jpg`}
                        alt="Instagram"
                      />
                    </StyledInstagramImage>
                  ))}
                </StyledInstagramImageGroup>
              </Column>
            </Row>
          </Container>
        </StyledInstagram>
      ) : null}
    </>
  )
}
