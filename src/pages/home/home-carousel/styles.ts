import styled from 'styled-components'

import {
  columnFlexbox,
  flexbox,
  positionCenter,
  textStyle,
  media,
} from '../../../styles/utils'

export const StyledHomeCarousel = styled.section`
  width: 100%;
  height: 480px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    ${flexbox()};
    position: relative;

    .carousel-text-group {
      ${positionCenter()};
      ${columnFlexbox()};
      width: 100%;
      height: 100%;
      z-index: 10;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};

      .category {
        ${textStyle('xxsWide')};
        margin-bottom: 16px;
      }

      .title {
        ${textStyle('md')};
        margin-bottom: 16px;
        font-weight: 500;
      }

      .link-button {
        ${textStyle('xxsWide')};
        color: ${({ theme }) => theme.colors.white};

        &::after {
          background-color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    .overlay {
      ${positionCenter()};
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.black};
      opacity: 0.2;
    }

    .carousel-image {
      ${flexbox()};
      width: 100%;
      height: 100%;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.coolGray[300]};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.coolGray[200]};
  }

  ${media.greaterThan('tablet')`
  height: 500px;

  .swiper-slide {
    .carousel-text-group {
        align-items: flex-start;
        left: 56%;
        text-align: left;

        .category {
            font-size: ${({ theme }) => theme.fontSizes.baseWide};
        }

        .title {
            font-size: ${({ theme }) => theme.fontSizes.lg};
        }

        .link-button {
            font-size: ${({ theme }) => theme.fontSizes.baseWide};
        }
    }
  }
    `}

  ${media.greaterThan('desktop')`
  .swiper-slide {
    .carousel-text-group {
        .title {
            font-size: ${({ theme }) => theme.fontSizes.xl};
        }
    }
  }`}
`
