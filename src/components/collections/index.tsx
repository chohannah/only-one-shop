import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'

import { useResponsive } from '../../hooks'
import { collectionsMap } from '../collections-map'

import { LogoLetter } from '../../assets/logos'

import { Button } from '../button'
import { Container, Row, Column } from '../grid'

import {
  StyledCollections,
  StyledCollectionsHeader,
  StyledCollectionsLinkCard,
  StyledCollectionsLinkCardImageButton,
  StyledCollectionsQuoteCard,
  StyledCollectionsQuoteCardTitle,
  StyledCollectionsTitle,
} from './styles'
import { ArrowLongRight } from '../../assets/icons'

export const Collections = () => {
  const collectionsList = Object.keys(collectionsMap)
  let pathname = window.location.pathname

  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <StyledCollections
      pathname={pathname}
      isTablet={isTablet}
      isDesktop={isDesktop}
    >
      <Container>
        <Row>
          <Column sm={4}>
            <StyledCollectionsHeader isTablet={isTablet} isDesktop={isDesktop}>
              <StyledCollectionsTitle>Collections</StyledCollectionsTitle>

              <Button variant="icon">
                See all
                <ArrowLongRight />
              </Button>
            </StyledCollectionsHeader>
          </Column>
        </Row>

        <Row>
          {collectionsList.map((item) => (
            <Column
              sm={4}
              md={pathname === '/' ? 4 : 6}
              lg={pathname === '/' ? 4 : 6}
            >
              <StyledCollectionsLinkCard
                as={Link}
                to={`collections/${item}`}
                isTablet={isTablet}
                isDesktop={isDesktop}
                key={item}
              >
                <StyledCollectionsLinkCardImageButton
                  isTablet={isTablet}
                  isDesktop={isDesktop}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/collections/${item}/hero.jpg`}
                    alt={`Link to ${item} collections}`}
                  />
                </StyledCollectionsLinkCardImageButton>

                <Button
                  to={`collections/${item}`}
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
