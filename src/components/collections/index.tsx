import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'

import { useResponsive } from '../../hooks'
import { collectionsMap } from '../collections-map'

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
  const collectionsList = Object.keys(collectionsMap)
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
            >
              <StyledCollectionsLinkCard
                as={Link}
                to={`/collections/${item}`}
                key={item}
              >
                <StyledCollectionsLinkCardImageButton>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/collections/${item}/hero.jpg`}
                    alt={`Link to ${item} collections}`}
                  />
                </StyledCollectionsLinkCardImageButton>

                <Button
                  to={`/collections/${item}`}
                  variant="underlined"
                  size={isMobile ? 24 : 34}
                >
                  {collectionsMap[item].linkTitle}
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
