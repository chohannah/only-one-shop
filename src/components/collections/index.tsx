import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'

import { useResponsive } from '../../hooks'
import { navMap } from '../nav-map'

import { SectionHeader } from '../section-header'

import { LogoLetter } from '../../assets/logos'

import { Button } from '../button'
import { Container, Row, Column } from '../grid'

import {
  StyledCollections,
  StyledCollectionsLinkCard,
  StyledCollectionsLinkCardImageButton,
  StyledCollectionsQuoteCard,
  StyledCollectionsQuoteCardTitle,
} from './styles'

export const Collections = () => {
  const collectionsList = Object.keys(navMap.navMenu.sideProducts)
  let pathname = window.location.pathname

  const { isMobile } = useResponsive()

  return (
    <StyledCollections pathname={pathname}>
      <Container>
        <Row>
          <SectionHeader title="Collections" to="/collections" />

          {collectionsList.map((item) => (
            <Column
              sm={4}
              md={pathname === '/' ? 4 : 6}
              lg={pathname === '/' ? 4 : 6}
              key={item}
            >
              <StyledCollectionsLinkCard as={Link} to={`/collections/${item}`}>
                <StyledCollectionsLinkCardImageButton>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/collections/${item}/hero.jpg`}
                    alt={`Link to ${item} collections}`}
                  />
                </StyledCollectionsLinkCardImageButton>

                <Button variant="underlined" size={isMobile ? 24 : 34}>
                  {navMap.navMenu.sideProducts[item]}
                </Button>
              </StyledCollectionsLinkCard>
            </Column>
          ))}

          {!isMobile && pathname === '/' ? (
            <Column
              sm={4}
              md={pathname === '/' ? 4 : 6}
              lg={pathname === '/' ? 4 : 6}
            >
              <StyledCollectionsQuoteCard>
                <LogoLetter />

                <StyledCollectionsQuoteCardTitle>
                  <Balancer>
                    Good design is as little design as possible.
                  </Balancer>
                </StyledCollectionsQuoteCardTitle>

                <Button to={`designers/dieter-rams`} variant="underlined">
                  Dieter Rams
                </Button>
              </StyledCollectionsQuoteCard>
            </Column>
          ) : null}
        </Row>
      </Container>
    </StyledCollections>
  )
}
