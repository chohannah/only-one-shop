import clsx from 'clsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Navigation, Keyboard, A11y, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/zoom'

import {
  CategoryItem,
  CategoryItemImages,
} from '../../../store/categories/category.types'

import { ProductDetailsCarouselHeader } from '../..'

import { StyledProductDetailsCarousel } from './styles'

type ProductDetailsCarouselProps = {
  name: CategoryItem['name'] | undefined
  images?: CategoryItemImages | null
}

export const ProductDetailsCarousel: React.FC<ProductDetailsCarouselProps> = ({
  name,
  images,
}) => {
  if (!images || !images.sub) {
    return null
  }

  const subImages = Object.values(images.sub)

  return (
    <StyledProductDetailsCarousel className={clsx('product-details-carousel')}>
      <ProductDetailsCarouselHeader name={name} />

      <Swiper
        scrollbar={{
          hide: false,
        }}
        navigation={{
          prevEl: '.carousel-header-nav-left',
          nextEl: '.carousel-header-nav-right',
        }}
        keyboard={{
          enabled: true,
        }}
        zoom={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={24}
        modules={[Scrollbar, Navigation, Keyboard, A11y, Zoom]}
        className="mySwiper"
      >
        {subImages.map((subImage, i) => (
          <SwiperSlide key={i}>
            <img src={subImage} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledProductDetailsCarousel>
  )
}
