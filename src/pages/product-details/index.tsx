import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import clsx from 'clsx'

import { selectCategories } from '../../store/categories/category.selector'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'
import { useResponsive } from '../../hooks/useResponsive'

import {
  ProductDetailsCarousel,
  ProductDetailsContent,
  ProductDetailsHeader,
  RelatedProducts,
} from '..'
import { Breadcrumbs, Button } from '../../components'

import {
  StyledProductDetails,
  StyledProductDetailsAddToCartButton,
} from './styles'
import { LogoCircle } from '../../assets/logos'

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
          <LogoCircle className="circle-logo" />

          <Breadcrumbs
            menu="products"
            category={category}
            name={name}
            separator=" > "
          />

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

          {isMobile ? (
            <StyledProductDetailsAddToCartButton>
              <Button
                className="add-button"
                variant="filled"
                size={54}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </StyledProductDetailsAddToCartButton>
          ) : null}
        </StyledProductDetails>
      ) : null}
    </>
  )
}
