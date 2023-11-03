import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectCategories } from '../../store/categories/category.selector'
import { selectCartItems } from '../../store/cart/cart.selector'
import { selectIsLoading } from '../../store/categories/category.selector'

import { addItemToCart } from '../../store/cart/cart.action'
import { CategoryItem } from '../../store/categories/category.types'

import { Button } from '../button'
import Spinner from '../spinner/spinner.component'

import {
  StyledProductCard,
  StyledProductCardName,
  StyledProductCardPrice,
  StyledProductCardTextGroup,
  StyledProductCardThumbnailContainer,
} from './styles'
import clsx from 'clsx'

type ProductCardProps = {
  product: CategoryItem
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, images, path } = product
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
  const cartItems = useSelector(selectCartItems)
  const isLoading = useSelector(selectIsLoading)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  const category = product
    ? categories
        .find((category) =>
          category.items.some((item) => item.path === product.path)
        )
        ?.title.toLowerCase()
    : ''

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledProductCard className={clsx('product-card')}>
          <Link to={`/products/${category}/${path}`}>
            <StyledProductCardThumbnailContainer>
              <img src={images?.thumbnail} alt="thumbnail" />
            </StyledProductCardThumbnailContainer>
          </Link>

          <StyledProductCardTextGroup>
            <StyledProductCardName>{name}</StyledProductCardName>
            <StyledProductCardPrice>€ {price}</StyledProductCardPrice>
          </StyledProductCardTextGroup>

          <Button
            className="product-card-add-button"
            variant="filled"
            size={54}
            onClick={addProductToCart}
          >
            Add to cart
          </Button>
        </StyledProductCard>
      )}
    </>
  )
}
