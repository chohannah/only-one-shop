import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import homeCarouselMap from './home-carousel-map'

import { Button } from '../../../components'
import { StyledHomeCarousel } from './styles'

export const HomeCarousel = () => {
  return (
    <StyledHomeCarousel>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        loop={true}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        {homeCarouselMap.map((slide) => (
          <SwiperSlide>
            <div className="carousel-text-group">
              <p className="category">{slide.cateogry.toUpperCase()}</p>
              <h2 className="title">{slide.title}</h2>
              <Button
                className="link-button"
                to={slide.linkTo}
                variant="underlined"
              >
                See More
              </Button>
            </div>

            <div className="overlay" aria-hidden />

            <div className="carousel-image">
              <img src={slide.imageUrl} alt={`background of ${slide.title}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHomeCarousel>
  )
}
