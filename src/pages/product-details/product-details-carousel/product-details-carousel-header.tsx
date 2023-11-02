import clsx from 'clsx'
import { useSwiper } from 'swiper/react'

import { CategoryItem } from '../../../store/categories/category.types'
import { useResponsive } from '../../../hooks'

import { ArrowLongRight } from '../../../assets/icons'

import { StyledProductDetailsCarouselHeader } from './styles'
import { Container, Row, Column } from '../../../components'

type ProductDetailsCarouselHeaderProps = {
  name: CategoryItem['name'] | undefined
}

export const ProductDetailsCarouselHeader: React.FC<
  ProductDetailsCarouselHeaderProps
> = ({ name }) => {
  const swiper = useSwiper()
  const { isMobile } = useResponsive()

  return (
    <StyledProductDetailsCarouselHeader
      className={clsx('product-details-carousel-header')}
    >
      <Container>
        <Row>
          <Column sm={4}>
            <div className="product-details-carousel-header-wrapper">
              {!isMobile ? (
                <button
                  className="carousel-header-nav-left"
                  onClick={() => swiper.slidePrev}
                >
                  <ArrowLongRight aria-hidden />
                </button>
              ) : null}

              <h3 className="carousel-header-title">{name}</h3>

              {!isMobile ? (
                <button
                  className="carousel-header-nav-right"
                  onClick={() => swiper.slideNext}
                >
                  <ArrowLongRight aria-hidden />
                </button>
              ) : null}
            </div>
          </Column>
        </Row>
      </Container>
    </StyledProductDetailsCarouselHeader>
  )
}
