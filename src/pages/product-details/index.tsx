import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import clsx from 'clsx'

import { selectCategories } from '../../store/categories/category.selector'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'

import { useResponsive } from '../../hooks/useResponsive'

import {
  ProductDetailsCarousel,
  ProductDetailsContent,
  ProductDetailsHeader,
} from '..'

import { StyledProductDetails } from './styles'
import { RelatedProducts } from './related-products'

export const ProductDetails = () => {
  const dispatch = useDispatch()
  const { productPath } = useParams()
  const { isMobile } = useResponsive()
  const categories = useSelector(selectCategories)
  const cartItems = useSelector(selectCartItems)

  const product = categories
    ? Object.values(categories)
        .flatMap((category) => category.items)
        .find((item) => item.path === productPath)
    : null

  const category = product
    ? categories.find((category) =>
        category.items.some((item) => item.path === productPath)
      )?.title
    : ''

  const { name, images, description, specifications } = product || {}

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItemToCart(cartItems, product))
    }
  }

  return (
    <>
      {product ? (
        <StyledProductDetails className={clsx('product-details')}>
          <ProductDetailsHeader
            category={category}
            product={product}
            handleAddToCart={handleAddToCart}
          />

          <ProductDetailsCarousel name={name} images={images} />

          {!isMobile ? (
            <ProductDetailsContent
              description={description}
              specifications={specifications}
            />
          ) : null}

          <RelatedProducts currentProduct={product} />
        </StyledProductDetails>
      ) : null}
    </>
  )
}
